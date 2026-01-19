import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
    if (!isOpen) return null;
    return (
        <>
            <div className='fixed inset-0 bg-black/50 z-50 flex justify-center items-center'>
                <div className='bg-gray-700 rounded-lg w-full max-w-md shadow-lg'>
                    <div className='flex justify-between items-center px-4 py-3 borber-b'>
                        <h3 className='font-semibold text-xl'>{title}</h3>
                        <button onClick={onClose} className='text-white-500 hover:text-black'>
                            <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                        </button>
                    </div>

                    <div className='p-4'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
