import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useDeleteEmployee = () => {
    const [deleteEmployeeIsLoading, setDeleteEmployeeIsLoading] = useState(false);
    const [deleteEmployeeIsError, setDeleteEmployeeIsError] = useState<string | null>(null);

    const deleteEmployee = async (id: string) => {
        try {
            setDeleteEmployeeIsLoading(true);
            await axiosInstance.delete(`/employees/${id}`)
        } catch (error) {
            setDeleteEmployeeIsError((error as TypeError).message)
        } finally {
            setDeleteEmployeeIsLoading(false);
        }
    }

    return {
        deleteEmployee,
        deleteEmployeeIsLoading,
        deleteEmployeeIsError
    }
}