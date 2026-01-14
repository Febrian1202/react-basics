import { useCounter } from '../hooks/useCounter'

const Counter = () => {
    const { count, handleDecrement, handleIncrement, handleResetCounter } = useCounter()
    return (
        <div className='gap-4 flex'>
            <button className='border-2 rounded-md px-4 bg-gray-800 active:bg-gray-400 active:scale-110 transition-all duration-150' onClick={handleDecrement}>Kurang</button>
            <p style={{ fontSize: "48px" }}>{count}</p>
            <button className='border-2 rounded-md px-4 bg-gray-800 active:bg-gray-400 active:scale-110 transition-all duration-150' onClick={handleIncrement}>Tambah</button>
            <button className='border-2 rounded-md px-4 bg-gray-800 active:bg-gray-400 active:scale-110 transition-all duration-150' onClick={handleResetCounter}>Reset</button>
        </div>
    )
}

export default Counter
