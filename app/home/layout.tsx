'use client';

import { refreshToken } from '@/utils/services/auth';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

type Props = {
    children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAccessToken = async () => {
            try {
                const res = await refreshToken();
                setAccessToken(res.data.accessToken);
            } catch (error: any) {
                console.error('❌ Error fetching token:', error);
                redirect('/');
            } finally {
                setLoading(false);
            }
        };

        getAccessToken();
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

    if (!accessToken) {
        return (
            <main className="p-10 text-red-500">
                <p>دسترسی غیرمجاز. لطفاً وارد شوید.</p>
            </main>
        );
    }

    return <main className="p-10">{children}</main>;
}
