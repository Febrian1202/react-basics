import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useCreateEmployee = () => {
    const [createEmployeeLoading, setCreateEmployeeLoading] = useState(false);
    const [createEmployeeError, setCreateEmployeeError] = useState<string | null>(null);

    const createEmployee = async (payload: string) => {
        try {
            setCreateEmployeeLoading(true);
            await axiosInstance.post("/employees", {
                name: payload
            })
        } catch (error) {
            setCreateEmployeeError("Failed to create employee " + error);
        } finally {
            setCreateEmployeeLoading(false);
        }
    }

    return {
        createEmployee,
        createEmployeeLoading,
        createEmployeeError
    }
}