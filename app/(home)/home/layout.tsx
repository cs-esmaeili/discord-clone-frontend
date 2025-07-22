'use client';

import { refreshToken } from '@/lib/axios/services/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken } from '@/lib/redux/slices/authSlice';

type Props = {
    children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const router = useRouter();

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
                router.replace('/');
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


    return <main className="p-10">{children}</main>;
}
