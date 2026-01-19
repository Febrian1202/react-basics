import { useState, useCallback } from "react";
import { axiosInstance } from "../lib/axios";


type EmployeeResponse = {
    id: string;
    name: string;
    job?: string;
};

export const useFetchEmployees = () => {
    const [employees, setEmployees] = useState<EmployeeResponse[]>([]);
    const [employeesIsLoading, setEmployeesIsLoading] = useState(false);
    const [employeesError, setEmployeesError] = useState("");

    const fetchEmployees = useCallback(async () => {
        try {
            setEmployeesIsLoading(true); // toggle loading on

            const response = await axiosInstance.get<EmployeeResponse[]>("/employees");
            console.log(response)

            setEmployees(response.data);
        } catch (error) {
            setEmployeesError((error as TypeError).message);
            // alert('Gagal mendapatkan data employee ' + error);
        } finally {
            setEmployeesIsLoading(false); // toogle loading off
        }
    }, []);

    return {
        employees,
        employeesIsLoading,
        employeesError,
        fetchEmployees
    }
}