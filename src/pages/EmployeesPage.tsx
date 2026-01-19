import { useFetchEmployees } from "../api/useFetchEmployee";
import { useEffect, useState } from "react";
import { useCreateEmployee } from "../api/useCreateEmployee";
import { useDeleteEmployee } from "../api/useDeleteEmployee";
import { useEditEmployee } from "../api/useEditEmployee";
import Modal from "../components/form/Modal";

// import React from 'react'


const EmployeesPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [mode, setMode] = useState<"create" | "edit" | "delete">("create");
    const [selectedEmployee, setSelectedEmployee] = useState<null | { id: string, name: string, job?: string }>(null);

    const [inputText, setInputText] = useState("")
    const [inputJob, setInputJob] = useState("")

    const {
        employees,
        employeesError,
        employeesIsLoading,
        fetchEmployees
    } = useFetchEmployees();

    useEffect(() => {
        fetchEmployees();
    }, [fetchEmployees]);

    const { createEmployee, createEmployeeLoading, createEmployeeError } = useCreateEmployee();

    const handleCreateEmployee = async () => {
        await createEmployee({ name: inputText, job: inputJob });
        await fetchEmployees();
        setInputText("");
        setInputJob("");
        setModalOpen(false);
    };

    const { deleteEmployee, deleteEmployeeIsError, deleteEmployeeIsLoading } = useDeleteEmployee();

    const handleDeleteEmployee = async (id: string) => {
        await deleteEmployee(id);
        await fetchEmployees();

        setSelectedEmployee(null);
        setModalOpen(false);
    };

    const { editEmployee, editEmployeeLoading, editEmployeeError } = useEditEmployee();

    const handleEditEmployee = async () => {
        if (selectedEmployee) {
            await editEmployee(selectedEmployee.id, { name: selectedEmployee.name, job: selectedEmployee.job });
            await fetchEmployees();

            setSelectedEmployee(null);
            setModalOpen(false);
        }
    }

    return (
        <div className="flex flex-col items-center m-4 gap-6 h-max">
            <h1 className="font-bold text-6xl">Karyawan</h1>


            <div className="w-4/5 overflow-x-auto">
                <button
                    disabled={employeesIsLoading}
                    className="p-2 m-2 rounded bg-blue-500 text-white"
                    onClick={() => {
                        setMode("create");
                        setModalOpen(true);
                    }}
                >
                    Create
                </button>
                {employeesIsLoading && <p>Loading ...</p>}
                {employeesError && <p className="text-red-500">{employeesError}</p>}
                <table className="w-full border border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="border p-2 text-left">ID</th>
                            <th className="border p-2 text-left">Nama</th>
                            <th className="border p-2 text-left">Pekerjaan</th>
                            <th className="border p-2 text-left">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map((employee) => {
                            return (
                                <tr key={employee.id} className="border-b">
                                    <td className="border p-2 text-left">{employee.id}</td>
                                    <td className="border p-2 text-left">{employee.name}</td>
                                    <td className="border p-2 text-left">{employee.job}</td>
                                    <td className="border p-2 text-center space-x-2">
                                        <button
                                            disabled={deleteEmployeeIsLoading}
                                            onClick={() => {
                                                setMode("delete");
                                                setSelectedEmployee({ id: employee.id, name: employee.name, job: employee.job });
                                                setModalOpen(true);
                                            }}
                                            className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                        <button
                                            disabled={deleteEmployeeIsLoading}
                                            onClick={() => {
                                                setMode("edit");
                                                setSelectedEmployee({ id: employee.id, name: employee.name, job: employee.job });
                                                setModalOpen(true);
                                            }}
                                            className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                                        <span>{deleteEmployeeIsError && <p className="text-red-500">{deleteEmployeeIsError}</p>}</span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>

                    {createEmployeeError && (
                        <span className="text-red-500">
                            {createEmployeeError}
                        </span>

                    )}
                    {editEmployeeError && (
                        <span className="text-red-500">
                            {editEmployeeError}
                        </span>

                    )}
                </table>
            </div>

            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={mode === "create" ? "Create Data" : mode === "edit" ? "Edit Data" : "Delete Data"}>
                {mode === "edit" && selectedEmployee && (
                    <div className="flex flex-col gap-2">
                        <p className="text-white">Nama: </p>
                        <input
                            onChange={(e) => setSelectedEmployee({ ...selectedEmployee, name: e.target.value })}
                            type="text"
                            value={selectedEmployee.name}
                            className="w-full rounded focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-none p-2 border" />

                        <p className="text-white">Job: </p>
                        <input
                            onChange={(e) => setSelectedEmployee({ ...selectedEmployee, job: e.target.value })}
                            type="text"
                            value={selectedEmployee.job}
                            className="w-full rounded focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-none p-2 border" />

                        <button disabled={editEmployeeLoading}
                            className="p-2 m-2 rounded bg-blue-500 text-white"
                            onClick={handleEditEmployee}>Update</button>
                    </div>
                )}

                {mode === "create" && (
                    <div className="flex flex-col gap-2">
                        <p className="text-white">Nama: </p>
                        <input
                            onChange={(e) => setInputText(e.target.value)}
                            type="text"
                            value={inputText}
                            className="w-full rounded focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-none p-2 border" />

                        <p className="text-white">Job: </p>
                        <input
                            onChange={(e) => setInputJob(e.target.value)}
                            type="text"
                            value={inputJob}
                            className="w-full rounded focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-none p-2 border" />


                        <button disabled={createEmployeeLoading}
                            className="p-2 m-2 rounded bg-blue-500 text-white"
                            onClick={handleCreateEmployee}>Tambah Data</button>
                    </div>
                )}

                {
                    mode === "delete" && selectedEmployee && (
                        <div className="flex flex-col gap-2">
                            <p className="text-white text-center font-bold text-2xl">Are you sure you want to delete this employee?</p>
                            <button disabled={deleteEmployeeIsLoading}
                                className="p-2 m-2 rounded bg-red-500 text-white"
                                onClick={() => handleDeleteEmployee(selectedEmployee.id)}>Delete</button>
                        </div>
                    )
                }
            </Modal>
        </div>
    );
};

export default EmployeesPage;
