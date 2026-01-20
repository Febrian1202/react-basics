// import React from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react";
import { useNavigate } from "react-router";



const registerFromSchema = z.object({
    name: z
        .string()
        .min(3, { message: "Minimal 3 karakter cuy" }),
    email: z
        .string()
        .trim()
        .toLowerCase()
        .email({ message: "Email tidak valid" }),
    password: z
        .string()
        .min(8, { message: "Minimal 8 karakter cuy" })
        .refine(val => /[A-Z]/.test(val), {
            message: "Harus ada 1 huruf besar"
        })
        .refine(val => /\d/.test(val), {
            message: "Harus mengandung angka"
        }),
    repeatPassword: z
        .string()
        .min(8, { message: "Minimal 8 karakter cuy" }),
    age: z.number({ message: "Masukkan angka cuy" }).min(18, { message: 'Minimal umur 18 tahun cuy' }),
})
    .superRefine((arg, ctx) => {
        if (arg.password !== arg.repeatPassword) {
            ctx.addIssue({
                code: "custom",
                path: ["repeatPassword"],
                message: "Password tidak sama!",
            })
        }
    });

type RegisterFormSchema = z.infer<typeof registerFromSchema>;

const RHFPage = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false)

    const form = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFromSchema)
    });

    const [users, setUsers] = useState<RegisterFormSchema[]>([])

    const handleRegisterUser = (values: RegisterFormSchema) => {
        // simulasi login sukses
        localStorage.setItem("isLoggedIn", "true");

        // simpan user login
        localStorage.setItem("user", JSON.stringify({
            name: values.name,
            email: values.email,
        }));

        // redirect ke halaman protected
        navigate("/employees");

        setUsers(prev => [...prev, values])
        form.reset()
    }

    return (
        <div className="flex flex-col items-center m-4 gap-6 h-max">
            <h1 className='font-bold text-6xl'>React Hook Form</h1>

            <form
                onSubmit={form.handleSubmit(handleRegisterUser)}
                action="" className='flex flex-col gap-2 items-start p-4'>

                <label className='flex flex-col gap-2'>
                    Nama:
                    <input type="text" {...form.register("name")} />
                </label>
                <span className="text-red-500">{form.formState.errors.name?.message}</span>

                <label className='flex flex-col gap-2'>
                    Email:
                    <input type="email" {...form.register("email")} />
                </label>
                <span className="text-red-500">{form.formState.errors.email?.message}</span>

                <label className='flex flex-col gap-2'>
                    Password:
                    <input type={showPassword ? "text" : "password"} {...form.register("password")} />
                </label>
                <span className="text-red-500">{form.formState.errors.password?.message}</span>

                <label className='flex flex-col gap-2'>
                    Repeat Password:
                    <input type={showPassword ? "text" : "password"} {...form.register("repeatPassword")} />
                </label>
                <span className="text-red-500">{form.formState.errors.repeatPassword?.message}</span>

                <label className='flex flex-row gap-2'>
                    <input type="checkbox"
                        onChange={(event) => setShowPassword(event.target.checked)} />
                    Show Password
                </label>

                <label className='flex flex-col gap-2'>
                    Age:
                    <input type="number" {...form.register("age", { valueAsNumber: true })} />
                </label>
                <span className="text-red-500">{form.formState.errors.age?.message}</span>

                <button
                    type="submit"
                    className="flex w-full justify-center bg-slate-400 rounded-lg"
                >Masuk</button>
            </form>

            <div className="w-full max-w-xl">
                {users.length === 0 && (
                    <p className="text-gray-400">Belum ada data</p>
                )}

                {users.map((user, i) => (
                    <div key={i} className="border p-3 rounded mb-2">
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.age}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RHFPage
