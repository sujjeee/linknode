import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <section className="bg-white dark:bg-gray-900 ">
            <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                <div className="flex flex-col justify-center items-center max-w-sm mx-auto text-center">
                    <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
                        <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                    </p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Opps! Page not found.</h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Organize your links with LinkNode and make them easy to find and share.</p>
                    <div className="flex justify-center items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                        <Button size={'sm'} asChild>
                            <Link href={'/'}>
                                Create your page
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
