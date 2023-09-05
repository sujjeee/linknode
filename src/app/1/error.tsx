'use client'

import { Button } from "@/components/ui/button"

export default function Error() {
    return (
        <div className="grid h-screen px-4 bg-white place-content-center">
            <div className="text-center space-y-5">
                <h1 className="font-medium text-primary text-3xl">Ghoss! Mistake Found in URL 💀</h1>
                <Button>Create new page</Button>
            </div>
        </div>
    )
}