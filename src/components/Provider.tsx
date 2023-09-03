'use client';

import { DataProvider } from "@/lib/context/LinkContext";
import React from "react";


export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <DataProvider>
            {children}
        </DataProvider>
    );
}