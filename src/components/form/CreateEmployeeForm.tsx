import { useState } from 'react'

const CreateEmployeeForm = (
  {
    loading, onSubmit
  }:
    {
      loading: boolean,
      onSubmit: (data: { name: string, job: string }) => void
    }
) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <p className="text-white">Nama: </p>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
        className="w-full rounded focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-none p-2 border" />

      <p className="text-white">Job: </p>
      <input
        onChange={(e) => setJob(e.target.value)}
        type="text"
        value={job}
        className="w-full rounded focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-none p-2 border" />


      <button disabled={loading}
        className="p-2 m-2 rounded bg-blue-500 text-white"
        onClick={() => onSubmit({ name, job })}>Tambah Data</button>
    </div>
  )
}

export default CreateEmployeeForm
