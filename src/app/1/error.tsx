'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Error() {
    return (
        <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]">
            <div className="text-center space-y-5">
                <h1 className="text-lg md:text-xl text-accent-foreground dark:text-gray-400">Sorry, there is mistake in url.</h1>
                <Button asChild size={'sm'}>
                    <Link href="/">Create new page</Link>
                </Button>
            </div>
        </div>
    )
}