import React from 'react'

type Props = {
  children: React.ReactNode
}

export function layout({ children }: Props) {
  return <div className="h-screen w-full bg-gray-500">{children}</div>
}

export default layout
