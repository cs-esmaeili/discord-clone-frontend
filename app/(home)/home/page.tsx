'use client'

import React from 'react';

const HomePage = () => {
    return (
        <div className='h-full flex grow justify-center items-center bg-gray-50'>
            <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">💬</div>
                <h2 className="text-xl font-medium mb-2">Select a chat to start messaging</h2>
                <p className="text-sm">Choose a conversation from the sidebar to begin</p>
            </div>
        </div>
    );
};

export default HomePage;