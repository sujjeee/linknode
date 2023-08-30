import * as React from "react"

import { cn } from "@/lib/utils"
import { Github } from 'lucide-react'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ComponentType<{ size: number }>;
}

const SocialInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, icon: Icon, ...props }, ref) => {
        return (
            <div className="relative mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center whitespace-nowrap rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-5 py-2.5 text-sm text-gray-500">
                    <Github size={20} />
                </span>
                <input
                    type='url'
                    className={cn(" border border-gray-300 text-gray-900 placeholder-gray-300 focus:border-gray-500 focus:ring-gray-500 block w-full rounded-r-md pr-10 text-sm focus:outline-none p-2.5", className)}
                    ref={ref}
                    {...props}
                />
            </div>
        )
    }
)
SocialInput.displayName = "SocialInput"

export { SocialInput }

