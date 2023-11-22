"use client"

import * as React from "react"
import { Shuffle, Trash2 } from 'lucide-react'
import { cn, generateNanoId } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input, type InputProps } from "@/components/ui/input"

interface ShortLinkInputProps extends InputProps {
    onShortlinkChange?: (shortlink: string) => void;
}

const ShortLinkInput = React.forwardRef<HTMLInputElement, ShortLinkInputProps>(
    ({ className, onShortlinkChange, ...props }, ref) => {
        const [nanoId, setNanoId] = React.useState('')

        function handleNanoId() {
            const id = generateNanoId()
            setNanoId(id)
        }

        React.useEffect(() => {
            if (onShortlinkChange) {
                onShortlinkChange(nanoId);
            }
        }, [nanoId])

        return (
            <div className="relative">
                <Input
                    className={cn("pr-10", className)}
                    ref={ref}
                    {...props}
                />
                <div className="flex  justify-center items-center absolute right-0 -translate-y-2/4 top-2/4 px-3 gap-3">
                    {nanoId &&
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className=" text-red-600 hover:text-destructive hover:bg-transparent hover:opacity-100 opacity-50 px-0"
                            onClick={() => setNanoId('')}
                        >
                            <Trash2 className="h-4 w-4" aria-hidden="true" />

                            <span className="sr-only">
                                randomize
                            </span>
                        </Button>
                    }
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="hover:bg-transparent hover:opacity-100 opacity-50 px-0"
                        onClick={handleNanoId}
                    >
                        <Shuffle className="h-4 w-4" aria-hidden="true" />

                        <span className="sr-only">
                            randomize
                        </span>
                    </Button>
                </div>
            </div>
        )
    }
)
ShortLinkInput.displayName = "ShortLinkInput"

export { ShortLinkInput }
