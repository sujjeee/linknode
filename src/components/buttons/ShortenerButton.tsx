"use client"

import React from 'react'
import { env } from "@/env.mjs"
import { catchError, encodeData } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useData } from '@/lib/context/LinkContext'
import { toast } from 'sonner'
import createShortLink from '@/app/_actions/shortlink'
import deleteLink from '@/app/_actions/deletelink'
import {
    Check,
    Copy,
    LinkIcon,
    Loader2,
    Trash2
} from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function ShortenerButton() {
    const { data } = useData()
    const [isOpen, setIsOpen] = React.useState(false)

    const [shortUrlInfo, setShortUrlInfo] = React.useState({
        url: '',
        shortLink: '',
        password: '',
    });
    const [shortedLink, setShortedLink] = React.useState('')
    const [someResponseInfo, setSomeResponseInfo] = React.useState<any | null>(null)
    const [hasCopied, setHasCopied] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        if (typeof window === "undefined") return
        const url = `${window.location.origin}/1?data=${encodeData(data)}`;
        setShortUrlInfo((prevInfo) => ({
            ...prevInfo,
            url: url,
        }));
    }, [data]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setShortUrlInfo((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    async function handleSubmit() {
        try {
            setIsLoading(true);

            const response = await createShortLink(shortUrlInfo);

            if (!response) {
                throw new Error('Error creating link');
            }

            toast.success('Link created successfully!');

            setSomeResponseInfo(response);
            setShortedLink(`https://${env.NEXT_PUBLIC_BASE_SHORT_DOMAIN}/${response.key}`);
        } catch (error) {
            catchError(error)
        } finally {
            setIsLoading(false);
        }
    }

    async function handleDelete() {
        try {
            setIsLoading(true);

            const response = await deleteLink(someResponseInfo);

            if (!response) {
                throw new Error('Error deleting link');
            }

            toast.success('Link deleted successfully!');

            setIsOpen(false);
        } catch (error) {
            catchError(error)
        } finally {
            setIsLoading(false);
        }
    }

    const copyToClipboard = React.useCallback(() => {
        if (shortedLink) {
            navigator.clipboard.writeText(shortedLink)
            setHasCopied(true);
        }
    }, [shortedLink]);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className='w-full'>
                    <LinkIcon className='mr-2 h-4 w-4' />
                    Shortener
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[450px]" showClose={false}>
                <CardHeader className='px-0 py-0'>
                    <CardTitle className='text-xl'>
                        Dub.co
                        <span className='text-sm text-slate-400 ml-2 font-normal'>
                            (coming soon)
                        </span>
                    </CardTitle>
                    <CardDescription>
                        Shorten your link with dub.co and get full control over it.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 p-0">
                    {!shortedLink ? (
                        <>
                            <Input
                                type='text'
                                className='select-none'
                                placeholder="Paste your link here"
                                value={shortUrlInfo.url}
                                readOnly
                            />
                            <Input
                                name="shortLink"
                                type='text'
                                placeholder="Short link"
                                onChange={handleChange}
                            />
                            <Input
                                name='password'
                                type='password'
                                placeholder="Password"
                                onChange={handleChange}
                            />
                            <Button
                                disabled={isLoading}
                                onClick={handleSubmit}
                                className='w-full'
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                                        Creating
                                    </>
                                ) : 'Create short link'}
                            </Button>
                        </>
                    ) : (
                        <>
                            <Input
                                type='text'
                                value={shortedLink}
                                readOnly
                            />
                            <div className="flex gap-3 w-full justify-between items-center">
                                <Button
                                    disabled={isLoading}
                                    variant={'destructive'}
                                    className="w-full"
                                    onClick={handleDelete}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                                            Deleting
                                        </>
                                    ) : <>
                                        <Trash2 className="mr-2 h-4 w-4" />
                                        Delete
                                    </>
                                    }
                                </Button>
                                <Button
                                    disabled={isLoading}
                                    className="w-full"
                                    onClick={copyToClipboard}
                                >
                                    {hasCopied ? (
                                        <>
                                            <Check className="mr-2 h-4 w-4" />
                                            Copied
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="mr-2 h-4 w-4" />
                                            Copy Link
                                        </>
                                    )}
                                </Button>
                            </div>
                        </>
                    )}
                </CardContent>
            </DialogContent>
        </Dialog >
    )
}
