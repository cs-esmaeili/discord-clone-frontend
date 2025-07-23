'use client'

import { check } from '@/lib/axios/services/test';
import { Button } from '@/components/ui/button';
import React from 'react';

const page = () => {
    return (
        <div>

            <Button onClick={async () => {
                try {
                    const test = await check();
                    console.log(test.data);

                } catch (error) {
                    console.log(error);
                }
            }}>test api</Button>
        </div>
    );
};

export default page;