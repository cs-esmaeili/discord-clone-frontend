'use client'

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { clearAccessToken } from '@/lib/redux/slices/authSlice';
import { useRouter } from 'next/navigation';

type UseLogoutOptions = {
    watcherEnable?: boolean;
};

export const useLogout = ({ watcherEnable = false }: { watcherEnable?: boolean } = {}) => {

    const dispatch = useDispatch();
    const router = useRouter();
    const accessToken = useSelector((state: RootState) => state.auth.accessToken);

    useEffect(() => {
        if (!watcherEnable) return;
        if (!accessToken) {
            dispatch(clearAccessToken());
            router.push('/');
        }
    }, [accessToken, dispatch, router]);

    const manualLogout = () => {
        dispatch(clearAccessToken());
        router.push('/');
    };

    return { manualLogout }
}