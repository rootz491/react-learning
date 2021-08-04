import React from 'react'

export default function Notification() {
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div>
                <div className="text-xl font-medium text-primary">ChitChat</div>
                <p className="text-blue-400">You have a new message!</p>
            </div>
        </div>

    )
}
