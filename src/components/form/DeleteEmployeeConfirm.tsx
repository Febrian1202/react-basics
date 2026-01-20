
const DeleteEmployeeConfirm = ({
    loading,
    onConfirm
}: {
    loading: boolean,
    onConfirm: () => void;
}) => {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-white text-center font-bold text-2xl">Are you sure you want to delete this employee?</p>
            <button disabled={loading}
                className="p-2 m-2 rounded bg-red-500 text-white"
                onClick={onConfirm}>Delete</button>
        </div>
    )
}

export default DeleteEmployeeConfirm
