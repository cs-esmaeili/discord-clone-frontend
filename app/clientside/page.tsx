'use client'

import { sessionStatus } from '@/utils/session';
import { redirect } from 'next/navigation';
import { useEffect, useLayoutEffect } from 'react';

const page = () => {

    useLayoutEffect(() => {
        const session = sessionStatus;
        if (!session) {
            redirect('/');
        }

    }, []);

    return (
        <div>
            {(() => { console.log("loaded"); return null })()}
            this page is protected Route on Client Side
        </div>
    );
};

export default page;