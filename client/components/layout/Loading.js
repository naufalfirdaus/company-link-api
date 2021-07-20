import React from 'react'

export default function Loading() {
    return (
        <div class="max-h-100hv antialiased bg-white bg-fixed min-h-screen absolute min-w-full z-50 flex items-center">
            <link rel="stylesheet" href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css" integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM=" crossorigin="anonymous" />
                <span class="text-indigo-500 top-1/2 my-0 mx-auto block relative w-0 h-0">
                    <i class="fas fa-circle-notch fa-spin fa-5x"></i>
                </span>
        </div>
    )
}
