import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useEditEmployee = () => {
    const [editEmployeeLoading, setEditEmployeeLoading] = useState(false);
    const [editEmployeeError, setEditEmployeeError] = useState<string | null>(null);

    const editEmployee = async (employeeId: string, payload: { name?: string, job?: string }) => {
        try {
            setEditEmployeeLoading(true);
            await axiosInstance.patch(`/employees/${employeeId}`, {
                name: payload.name ? payload.name : undefined,
                job: payload.job ? payload.job : undefined
            })
        } catch (error) {
            setEditEmployeeError("Failed to create employee " + error);
        } finally {
            setEditEmployeeLoading(false);
        }
    }

    return {
        editEmployee,
        editEmployeeLoading,
        editEmployeeError
    }
}