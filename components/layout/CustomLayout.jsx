import React from 'react'

export default function CustomLayout({bg, children}) {
    return (
        <div className={"rounded-md py-4 shadow-sm " + bg}>
            {children}
        </div>
    )
}
