"use client";

import { sessionStatus } from "@/utils/session";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";

const withAuth = (WrappedComponent: React.ComponentType<any>) => {

    const WithAuth = (props: any) => {
        const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

        useEffect(() => {
            const checkSession = async () => {
                const session =  sessionStatus; // اگر sessionStatus تابع async هست
                if (!session) {
                    redirect("/"); // انتقال به صفحه ورود
                } else {
                    setIsAuthenticated(true);
                }
            };
            checkSession();
        }, []);

        if (isAuthenticated === null) {
            return <div>Loading...</div>; // یا spinner
        }

        return <WrappedComponent {...props} />;
    };

    return WithAuth;
};

export default withAuth;
