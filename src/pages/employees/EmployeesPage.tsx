import { useFetchEmployees } from "../../api/useFetchEmployee";
import { useEffect, useState } from "react";
import { useCreateEmployee } from "../../api/useCreateEmployee";
import { useDeleteEmployee } from "../../api/useDeleteEmployee";
import { useEditEmployee } from "../../api/useEditEmployee";
import Modal from "../../components/form/Modal";
import type { Employee } from "../../types/Employee";
import EditEmployeeForm from "../../components/form/EditEmployeeForm";
import CreateEmployeeForm from "../../components/form/CreateEmployeeForm";
import DeleteEmployeeConfirm from "../../components/form/DeleteEmployeeConfirm";

// import React from 'react'

type ModalMode = "create" | "edit" | "delete";

const EmployeesPage = () => {
    const [modal, setModal] = useState<{
        open: boolean;
        mode: ModalMode;
        employee: Employee | null;
    }>({
        open: false,
        mode: "create",
        employee: null
    })

    const {
        employees,
        employeesError,
        employeesIsLoading,
        fetchEmployees
    } = useFetchEmployees();
    const { createEmployee, createEmployeeLoading, createEmployeeError } = useCreateEmployee();
    const { editEmployee, editEmployeeLoading, editEmployeeError } = useEditEmployee();
    const { deleteEmployee, deleteEmployeeIsError, deleteEmployeeIsLoading } = useDeleteEmployee();

    useEffect(() => {
        fetchEmployees();
    }, [fetchEmployees]);

    const closeModal = () => setModal({ open: false, mode: "create", employee: null });



    return (
        <div className="flex flex-col items-center m-4 gap-6 h-max">
            <h1 className="font-bold text-6xl">Karyawan</h1>


            <div className="w-4/5 overflow-x-auto">
                <button
                    disabled={employeesIsLoading}
                    className="p-2 m-2 rounded bg-blue-500 text-white"
                    onClick={() => {
                        setModal({ open: true, mode: "create", employee: null })
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
                                                setModal({ open: true, mode: "delete", employee: employee })
                                            }}
                                            className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                        <button
                                            disabled={editEmployeeLoading}
                                            onClick={() => {
                                                setModal({ open: true, mode: "edit", employee: employee })
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

            <Modal isOpen={modal.open} onClose={closeModal} title={modal.mode === "create" ? "Create Data" : modal.mode === "edit" ? "Edit Data" : "Delete Data"}>
                {modal.mode === "edit" && modal.employee && (
                    <EditEmployeeForm
                        employee={modal.employee}
                        loading={editEmployeeLoading}
                        onSubmit={async (employee) => {
                            await editEmployee(employee.id, employee);
                            await fetchEmployees();
                            closeModal();
                        }}
                    />
                )}

                {modal.mode === "create" && (
                    <CreateEmployeeForm
                        loading={createEmployeeLoading}
                        onSubmit={async (data) => {
                            await createEmployee(data);
                            await fetchEmployees();
                            closeModal();
                        }}
                    />
                )}

                {
                    modal.mode === "delete" && (
                        <DeleteEmployeeConfirm
                            loading={deleteEmployeeIsLoading}
                            onConfirm={async () => {
                                await deleteEmployee(modal.employee!.id);
                                await fetchEmployees();
                                closeModal();
                            }}
                        />
                    )
                }
            </Modal>
        </div>
    );
};

export default EmployeesPage;
