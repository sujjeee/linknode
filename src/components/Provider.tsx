'use client';

import React from "react";
import { DataProvider } from "@/lib/context/LinkContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <DataProvider>
            {children}
        </DataProvider>
    );
}