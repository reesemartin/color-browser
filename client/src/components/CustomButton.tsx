import React from 'react'

interface CustomButtonProps {
  onClick: Function
  children: React.ReactNode
  className?: string
}
export const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children, className }) => {
  return (
    <button onClick={() => { typeof onClick === 'function' ? onClick() : null }} className={`block w-full py-2 pb-1.5 px-6 bg-white hover:bg-gray-100 border border-theme-darkGray text-center text-lg font-bold rounded-md transition-all ${className ? className : ''}`}>
      {children}
    </button>
  )
}
