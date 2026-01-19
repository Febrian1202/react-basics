import { useFetchEmployees } from "../api/useFetchEmployee";
import { useState } from "react";
import { useCreateEmployee } from "../api/useCreateEmployee";
import { useDeleteEmployee } from "../api/useDeleteEmployee";
import { useEditEmployee } from "../api/useEditEmployee";

// import React from 'react'


const EmployeesPage = () => {
    const [inputText, setInputText] = useState("")

    const {
        employees,
        employeesError,
        employeesIsLoading,
        fetchEmployees
    } = useFetchEmployees();

    const { createEmployee, createEmployeeLoading, createEmployeeError } = useCreateEmployee();

    const handleCreateEmployee = async () => {
        await createEmployee(inputText);
        await fetchEmployees();
        setInputText("");
    };

    const { deleteEmployee, deleteEmployeeIsError, deleteEmployeeIsLoading } = useDeleteEmployee();

    const handleDeleteEmployee = async (id: string) => {
        await deleteEmployee(id);
        await fetchEmployees();
    };

    const [editEmployeeText, setEditEmployeeText] = useState("")
    const [editEmployeeJobText, setEditEmployeeJobText] = useState("")
    const [selectedEmployeeId, setSelectedEmployeeId] = useState("")
    const { editEmployee, editEmployeeLoading, editEmployeeError } = useEditEmployee();

    const handleEditEmployee = async () => {
        if (selectedEmployeeId && (editEmployeeText || editEmployeeJobText)) {
            await editEmployee(selectedEmployeeId, { name: editEmployeeText, job: editEmployeeJobText });
            await fetchEmployees();

            setEditEmployeeText("");
            setEditEmployeeJobText("");
            setSelectedEmployeeId("");
        }
    }

    return (
        <div className="flex flex-col items-center m-4 gap-6 h-max">
            <h1 className="font-bold text-6xl">Karyawan</h1>


            <div className="w-4/5 overflow-x-auto">
                <button
                    disabled={employeesIsLoading}
                    className="p-2 m-2 rounded bg-blue-500 text-white"
                    onClick={fetchEmployees}
                >
                    Fetch
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
                            <th className="border p-2 text-left">Select Edit</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map((employee) => {
                            return (
                                <tr key={employee.id} className="border-b">
                                    <td className="border p-2 text-left">{employee.id}</td>
                                    <td className="border p-2 text-left">{employee.name}</td>
                                    <td className="border p-2 text-left">{employee.job}</td>
                                    <td className="border p-2 text-left">
                                        <button
                                            disabled={deleteEmployeeIsLoading}
                                            onClick={() => handleDeleteEmployee(employee.id)}
                                            className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                        <span>{deleteEmployeeIsError && <p className="text-red-500">{deleteEmployeeIsError}</p>}</span>
                                    </td>
                                    <td className="border p-2 text-center">
                                        <input
                                            checked={selectedEmployeeId === employee.id}
                                            onChange={() => {
                                                setSelectedEmployeeId(employee.id);
                                                setEditEmployeeText(employee.name);
                                                setEditEmployeeJobText(employee.job || "")
                                            }
                                            }
                                            type="radio" name="employee-edit" />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>

                    <tfoot>
                        <tr className="border-b">
                            <td colSpan={2} className="border p-2 text-center">
                                <input
                                    className="w-full rounded focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-none p-2 border"
                                    onChange={(e) => setInputText(e.target.value)}
                                    type="text" /></td>
                            <td>
                                <button
                                    className="p-2 m-2 rounded bg-blue-500 text-white"
                                    onClick={handleCreateEmployee} disabled={createEmployeeLoading} value={inputText}>Create Employee</button>
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td colSpan={2} className="border p-2 text-center">
                                <input className="w-full rounded focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-none p-2 border" type="text"
                                    value={editEmployeeText}
                                    onChange={e => setEditEmployeeText(e.target.value)} />
                            </td>
                            <td className="border p-2 text-center">
                                <input className="w-full rounded focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-none p-2 border" type="text"
                                    value={editEmployeeJobText}
                                    onChange={e => setEditEmployeeJobText(e.target.value)} />
                            </td>
                            <td>
                                <button
                                    disabled={editEmployeeLoading || !selectedEmployeeId}
                                    className="p-2 m-2 rounded bg-blue-500 text-white"
                                    onClick={handleEditEmployee}
                                >Update Employee</button>
                            </td>
                        </tr>
                    </tfoot>
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
        </div>
    );
};

export default EmployeesPage;
