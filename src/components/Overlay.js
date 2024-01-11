import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export const Overlay = ({isOpen, onClose, children}) => {
    return (
        <>
            {
                isOpen ? (
                    <div className='overlay'>
                        <div className='fixed top-0 left-0 z-10 bg-[rgba(0,0,0,0.8)] w-full h-screen' onClick={onClose}>
                            <div className='fixed top-0 right-0 left-0 bottom-0 m-auto z-10 p-20 bg-white w-fit h-fit'>
                                <div className='flex justify-end'>
                                    <button className='text-black' type='button' onClick={onClose}><AiOutlineClose size={20} /></button>
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}
