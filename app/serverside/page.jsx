import { sessionStatus } from '@/utils/session';
import { redirect } from 'next/navigation';

const page = () => {

    const session = sessionStatus;
    if(!session){
        redirect('/');
    }
    
    return (
        <div>
            this is sever side component
        </div>
    );
};

export default page;