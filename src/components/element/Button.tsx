import React from 'react'

export function Button({ onClick, children }: { onClick?: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="w-full rounded bg-primary py-3 text-base text-white"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
