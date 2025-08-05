'use client';

import { refreshToken } from '@/lib/axios/services/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '@/lib/redux/slices/authSlice';
import { useLogout } from '@/hooks/useLogout';
import Sidebar from '@/components/Sidebar';
import { usePathname } from 'next/navigation';

type Props = {
    children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const { manualLogout } = useLogout({ watcherEnable: !loading });
    const pathname = usePathname();

    const isOnMenu = pathname === "/home";

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const res = await refreshToken();

                if (!res?.data?.accessToken) {
                    throw new Error('Invalid token received');
                }

                dispatch(setAccessToken(res.data.accessToken));
            } catch (error) {
                console.error('❌ Error fetching token:', error);
                manualLogout();
            } finally {
                setLoading(false);
            }
        };

        fetchToken();
    }, []);


    if (loading) {
        return (
            <main className="p-10">
                <div className="flex flex-row space-x-4">
                    <div className="w-12 h-12 rounded-full animate-spin border border-dashed border-yellow-500 border-t-transparent" />
                </div>
            </main>
        );
    }



    return (
        <main className="bg-red-400 max-h-screen h-screen flex overflow-hidden relative">

            <div className={`flex flex-col grow md:flex-[2] lg:flex-[2] bg-teal-400 overflow-hidden shrink-0 
                 absolute inset-0 md:relative
                  transform transition-transform duration-300
                   ${isOnMenu ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                 `}>
                <Sidebar />
            </div>

            <div
                className={`flex-col flex-[6] bg-pink-700 overflow-hidden shrink-0
                    absolute inset-0 md:relative md:flex
                     transform transition-transform duration-300
                     ${isOnMenu ? 'translate-x-full md:translate-x-0' : 'translate-x-0'}
                      `}>
                {children}
            </div>


        </main>

    )
}
