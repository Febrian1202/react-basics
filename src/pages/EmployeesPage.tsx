import { useFetchEmployees } from "../api/useFetchEmployee";
import { useState } from "react";
import { useCreateEmployee } from "../api/useCreateEmployee";
import { useDeleteEmployee } from "../api/useDeleteEmployee";

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

    return (
        <div className="flex flex-col items-center m-4 gap-6 h-max">
            <h1 className="font-bold text-6xl">Karyawan</h1>

            <div className="w-4/5 overflow-x-auto">
                <table className="w-full border border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="border p-2 text-left">ID</th>
                            <th className="border p-2 text-left">Nama</th>
                            <th className="border p-2 text-left">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map((employee) => {
                            return (
                                <tr key={employee.id} className="border-b">
                                    <td className="border p-2 text-left">{employee.id}</td>
                                    <td className="border p-2 text-left">{employee.name}</td>
                                    <td className="border p-2 text-left">
                                        <button
                                            disabled={deleteEmployeeIsLoading}
                                            onClick={() => handleDeleteEmployee(employee.id)}
                                            className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                        <span>{deleteEmployeeIsError && <p className="text-red-500">{deleteEmployeeIsError}</p>}</span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>

                    <tfoot>
                        <tr className="border-b">
                            <td colSpan={2} className="border p-2 text-left">
                                <input
                                    onChange={(e) => setInputText(e.target.value)}
                                    type="text" /></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button onClick={handleCreateEmployee} disabled={createEmployeeLoading} value={inputText}>Create Employee</button>
                            </td>
                        </tr>
                        {createEmployeeError && (
                            <tr>
                                <td colSpan={2} className="text-red-500">
                                    {createEmployeeError}
                                </td>
                            </tr>
                        )}
                    </tfoot>
                </table>

                <button
                    disabled={employeesIsLoading}
                    className="border p-2 m-2"
                    onClick={fetchEmployees}
                >
                    Fetch
                </button>
                {employeesIsLoading && <p>Loading ...</p>}
                {employeesError && <p className="text-red-500">{employeesError}</p>}
            </div>
        </div>
    );
};

export default EmployeesPage;
