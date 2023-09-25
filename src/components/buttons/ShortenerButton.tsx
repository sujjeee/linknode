"use client"

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button, buttonVariants } from '@/components/ui/button'
import { Check, Copy, LinkIcon, Loader2 } from 'lucide-react'
import { Input } from '../ui/input'
import { ShortWithBitly } from '@/actions/ShortWithBitly'
import { cn, encodeData } from '@/lib/utils'
import { useData } from '@/lib/context/LinkContext'
import Link from 'next/link'
import { toast } from 'sonner'

export default function ShortenerButton() {

    // const { data } = useData()
    // const [inputLink, setInputLink] = React.useState<string>("")
    // const [isShortUrl, setIsShortUrl] = React.useState<boolean>(false)
    // const [isLoading, setIsLoading] = React.useState<boolean>(false)
    // const [hasCopied, setHasCopied] = React.useState<boolean>(false)


    // const copyToClipboard = React.useCallback(async () => {
    //     const url = inputLink;
    //     navigator.clipboard.writeText(url)
    // }, [inputLink]);

    // async function handleShortLink() {
    //     try {
    //         setIsLoading(true)
    //         const getShortLink = await ShortWithBitly(inputLink)
    //         setInputLink(getShortLink)
    //         setIsLoading(false)
    //         setIsShortUrl(true)
    //     } catch (error) {
    //         setIsLoading(false)
    //         error instanceof Error
    //             ? toast.error(error.message)
    //             : toast.error("Something went wrong. Please try again later.");
    //     }
    // }

    // React.useEffect(() => {

    //     //  use in local development  
    //     // const url = `https://linknode.vercel.app/1?data=${encodeData(data)}`;

    //     const url = `${window.location.origin}/1?data=${encodeData(data)}`;
    //     setInputLink(url)
    //     setIsShortUrl(false)
    //     setHasCopied(false)
    // }, [data])

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='w-full'>
                    <LinkIcon className='mr-2 h-4 w-4' />
                    Shortener
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[450px]" showClose={false}>
                <Tabs defaultValue="account" >
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="bitly">Bit.ly</TabsTrigger>
                        <TabsTrigger value="dubco">Dub.co</TabsTrigger>
                    </TabsList>
                    <TabsContent value="bitly">
                        <CardHeader className='px-0'>
                            <CardTitle>Bit.ly</CardTitle>
                            <CardDescription>
                                Generate a quick short link with bit.ly
                            </CardDescription>
                        </CardHeader>
                        {/* <CardContent className="space-y-2 px-0"> */}
                        {/* <Input
                                placeholder="Enter your link"
                                value={inputLink}
                                required
                                readOnly
                            /> */}
                        {/* </CardContent> */}
                        <CardFooter className='p-0'>
                            {/* {isShortUrl ? (
                                <Button
                                    className="w-full"
                                    onClick={() => {
                                        copyToClipboard()
                                        setHasCopied(true);
                                    }}
                                >
                                    {
                                        hasCopied
                                            ? (
                                                <>
                                                    <Check className="mr-2 h-4 w-4" />
                                                    Copied
                                                </>
                                            )
                                            : (
                                                <>
                                                    <Copy className="mr-2 h-4 w-4" />
                                                    Copy Link
                                                </>
                                            )
                                    }
                                </Button>
                            ) : (
                                <Button
                                    className="w-full"
                                    onClick={handleShortLink}
                                >
                                    {isLoading ? (
                                        <Loader2
                                            className="mr-2 h-4 w-4 animate-spin"
                                            aria-hidden="true"
                                        />
                                    ) : (

                                        "Create short url"
                                    )}

                                </Button>
                            )} */}
                            <Link
                                target='_blank'
                                href="https://bitly.com/"
                                className={cn(buttonVariants(), 'w-full')}
                            >
                                Visit website
                            </Link>
                        </CardFooter>
                    </TabsContent>
                    <TabsContent value="dubco">
                        <CardHeader className='px-0'>
                            <CardTitle>Dub.co</CardTitle>
                            <CardDescription>
                                Shorten your link with dub.co and get full control over it.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 p-0">
                            <Link
                                target='_blank'
                                href="https://dub.co/"
                                className={cn(buttonVariants(), 'w-full')}
                            >
                                Visit website
                            </Link>
                        </CardContent>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>

    )
}
