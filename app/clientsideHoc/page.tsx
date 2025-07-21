'use client'

import withAuth from '@/components/withAuth';
import React from 'react';

const page = () => {
    return (
        <div>
            This is Hoc Client SIde
        </div>
    );
};

export default withAuth(page);