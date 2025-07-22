'use client';

import { store } from '@/lib/redux/store';
import { Provider } from 'react-redux';

type Props = {
    children: React.ReactNode;
};

export default function ProviderLayout({ children }: Props) {

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
