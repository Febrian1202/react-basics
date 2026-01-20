import { useState } from 'react'
import type { Employee } from '../../types/Employee'

const EditEmployeeForm = ({
    employee,
    loading,
    onSubmit
}: {
    employee: Employee;
    loading: boolean;
    onSubmit: (employee: Employee) => void;
}) => {
    const [form, setForm] = useState<Employee>(employee)

    return (
        <div className="flex flex-col gap-2">
            <p className="text-white">Nama: </p>
            <input
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                type="text"
                value={form.name}
                className="w-full rounded focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-none p-2 border" />

            <p className="text-white">Job: </p>
            <input
                onChange={(e) => setForm({ ...form, job: e.target.value })}
                type="text"
                value={form.job}
                className="w-full rounded focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-none p-2 border" />

            <button disabled={loading}
                className="p-2 m-2 rounded bg-blue-500 text-white"
                onClick={() => onSubmit(form)}>Update</button>
        </div>
    )
}

export default EditEmployeeForm
