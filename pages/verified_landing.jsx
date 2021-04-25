import React from 'react'
import Link from 'next/link'
export default function VerifiedLanding() {
    return (
        <div className="container text-center my-5">
            <h2 className="color-active">Acount Anda Terverifikasi</h2>
            <p>klik <Link href="/auth/login">Link</Link> untuk lanjut ke halaman Login</p>
        </div>
    )
}

