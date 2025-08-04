import React from 'react';

const Sidebar = () => {
    return (
        <div className='flex flex-col  flex-[1] bg-amber-700 overflow-hidden  shrink-0'>

            <div className='flex-[1] bg-green-400 shrink-0'>
                header
            </div>
            <div className='flex flex-[15] flex-col gap-3 bg-amber-200 overflow-y-auto'>

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
                <div className='h-50 bg-teal-300 flex justify-center items-center shrink-0'>this is test card</div>
                <div className='h-50 bg-teal-300 flex justify-center items-center shrink-0'>this is test card</div>
                
            </div>

        </div>
    );
};

export default Sidebar;