'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Error() {
    return (
        <div className="grid h-screen px-4 bg-white place-content-center">
            <div className="text-center space-y-5">
                <h1 className="font-medium text-primary text-3xl">Ghoss! Mistake Found in URL 💀</h1>
                <Button asChild>
                    <Link href="/">Create new page</Link>
                </Button>
            </div>
        </div>
    )
}