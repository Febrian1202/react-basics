import { useState } from 'react'

const FormPage = () => {
    // Uncontrolled component/input
    // const inputRef = useRef<HTMLInputElement>(null);
    // const inputEmailRef = useRef<HTMLInputElement>(null);

    // Controlled Component/Input
    const [userNameInput, setUserNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const [usernameErrorMessage, setUserNameErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

    const handleSubmit = () => {
        // const fullNameFormValue = inputRef.current?.value
        // const emailFormValue = inputEmailRef.current?.value
        // alert('form submitted ' + fullNameFormValue + " " + emailFormValue)


        const passwordValidation = passwordInput.length < 8



        if (passwordValidation) {
            setPasswordErrorMessage("Password must be at least 8 characters")
        }
        return
    }

    return (
        <div className="flex flex-col items-center m-4 gap-6 h-max">
            <h1 className='font-bold text-6xl'>Form Page</h1>

            <h3>Username: {userNameInput}</h3>
            <h3>Password: {passwordInput}</h3>

            <div className='flex flex-col gap-4 items-left'>
                <label htmlFor="full-name" className='text-xl'>Username</label>
                <input onChange={(event) => {
                    setUserNameInput(event.target.value)

                    const userNameValidation = event.target.value.length < 4;
                    if (userNameValidation) {
                        setUserNameErrorMessage("Username must be at least 4 characters")
                    } else {
                        setUserNameErrorMessage("");
                    }
                }}
                    value={userNameInput}
                    id='full-name'
                    type="text"
                    className='rounded-lg p-1' />
                {
                    usernameErrorMessage ?? <p>{usernameErrorMessage}</p>
                }
                <label htmlFor="password" className='text-xl'>Password</label>
                <input onChange={(event) => setPasswordInput(event.target.value)} value={passwordInput} id='password' type="password" className='rounded-lg p-1' />
                {
                    passwordErrorMessage ?? <p>{passwordErrorMessage}</p>
                }

                <button className='bg-slate-700 rounded-md p-2' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default FormPage
