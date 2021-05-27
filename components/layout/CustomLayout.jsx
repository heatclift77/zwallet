import React from 'react'

export default function CustomLayout({bg, children, ...rest}) {
    return (
        <div className={"position-relative rounded-md py-4 shadow-sm " + bg} {...rest}>
            {children}
        </div>
    )
}
