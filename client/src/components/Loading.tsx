import React from 'react'

interface LoadingProps {
  className?: string
}
export const Loading: React.FC<LoadingProps> = ({ className }) => {
  return (
    <div className={`text-center text-2xl ${className ? className : ''}`}>
      <div><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
      Loading...
    </div>
  )
}
