// import React from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react";

// type RegisterFormSchema = {
//     username: string;
//     password: string
// }

const registerFromSchema = z.object({
    username: z
        .string()
        .min(3, { message: "Minimal 3 karakter cuy" })
        .max(10, { message: "Maksimal 10 karakter cuy" }),
    password: z
        .string()
        .min(8, { message: "Minimal 8 karakter cuy" }),
    repeatPassword: z
        .string()
        .min(8),
    age: z.number({ message: "Masukkan angka cuy" }).min(18, { message: 'Minimal umur 18 tahun cuy' }),
    dob: z.date().optional()
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
    const [showPassword, setShowPassword] = useState(false)

    const form = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFromSchema)
    });

    const handleRegisterUser = (values: RegisterFormSchema) => {
        alert("Form Submitted");
        console.log(values)
    }

    return (
        <div className="flex flex-col items-center m-4 gap-6 h-max">
            <h1 className='font-bold text-6xl'>React Hook Form</h1>

            <form
                onSubmit={form.handleSubmit(handleRegisterUser)}
                action="" className='flex flex-col gap-2 items-start p-4'>

                <label className='flex flex-col gap-2'>
                    Username:
                    <input type="text" {...form.register("username")} />
                </label>
                <span className="text-red-500">{form.formState.errors.username?.message}</span>

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

                <label className='flex flex-col gap-2'>
                    Date of Birth:
                    <input type="date" {...form.register("dob", { valueAsDate: true })} />
                </label>
                <span className="text-red-500">{form.formState.errors.dob?.message}</span>

                <button
                    type="submit"
                    className="flex w-full justify-center bg-slate-400 rounded-lg"
                >Masuk</button>
            </form>
        </div>
    )
}

export default RHFPage
