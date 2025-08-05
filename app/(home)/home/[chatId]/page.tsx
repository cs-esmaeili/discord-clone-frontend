'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const page = ({ params }: { params: Promise<{ chatId: string }> }) => {

    const { chatId } = React.use(params);
    const router = useRouter();

    return (
        <>
            <div className='flex-[1] bg-red-400 shrink-0'>
                header

                <Button className='md:hidden' onClick={() => {
                    router.push('/home/');
                }}>
                    back
                </Button>

            </div>

            <div className='flex flex-[15] flex-col gap-3 bg-amber-200 overflow-y-auto'>

                {chatId}

                {/* <div className='h-50 bg-teal-300 flex justify-center items-center shrink-0'>this is test card</div>
                    <div className='h-50 bg-teal-300 flex justify-center items-center shrink-0'>this is test card</div>
                    <div className='h-50 bg-teal-300 flex justify-center items-center shrink-0'>this is test card</div>
                    <div className='h-50 bg-teal-300 flex justify-center items-center shrink-0'>this is test card</div>
                    <div className='h-50 bg-teal-300 flex justify-center items-center shrink-0'>this is test card</div>
                    <div className='h-50 bg-teal-300 flex justify-center items-center shrink-0'>this is test card</div>
                    <div className='h-50 bg-teal-300 flex justify-center items-center shrink-0'>this is test card</div>
                    <div className='h-50 bg-teal-300 flex justify-center items-center shrink-0'>this is test card</div>
                    <div className='h-50 bg-teal-300 flex justify-center items-center shrink-0'>this is test card</div>
                    <div className='h-50 bg-teal-300 flex justify-center items-center shrink-0'>this is test card</div>
                    <div className='h-50 bg-teal-300 flex justify-center items-center shrink-0'>this is test card</div>
                    <div className='h-50 bg-teal-300 flex justify-center items-center shrink-0'>this is test card</div>
                    <div className='h-50 bg-teal-300 flex justify-center items-center shrink-0'>this is test card</div>
                    <div className='h-50 bg-teal-300 flex justify-center items-center shrink-0'>this is test card</div> */}

            </div>
        </>
    );
};

export default page;