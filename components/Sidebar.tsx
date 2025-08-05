'use client'

import { useRouter } from 'next/navigation';


const Sidebar = () => {

    const router = useRouter();

    return (
        <>
            <div className='flex-[1] bg-green-400 shrink-0'>
                header
            </div>
            <div className='flex flex-[15] flex-col gap-3 bg-amber-200 overflow-y-auto'>

                <div className='h-50 bg-teal-300 flex justify-center items-center shrink-0' onClick={() => {
                    router.push('/home/507040');
                }}>this is test card</div>

            </div>
        </>

    );
};

export default Sidebar;