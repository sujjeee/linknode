import { decodeData } from "@/lib/utils";
import NotFound from "../not-found";
import { BACKGROUND_OPTIONS } from "@/components/background/BgSnippets";
import DisplayData from "@/components/DisplayData";
import DataLoading from "./loading";

export async function generateMetadata({ searchParams }: any) {
    const data = decodeData(searchParams.data);

    if (!data) {
        return {};
    }

    return {
        title: `${data.n}'s`,
        description: `Find all of ${data.n}'s links in one place.`,
        openGraph: {
            type: "website",
            locale: "en_US",
            url: "https://linknode.vercel.app",
            title: `${data.n}'s - LinkNode`,
            description: `Find all of ${data.n}'s links in one place.`,
            images: `http://localhost:3000/api/og?data=${encodeURI(data.n)}`,
            siteName: `${data.n}'s - LinkNode`,
        },
        twitter: {
            card: "summary_large_image",
            title: `${data.n} - LinkNode`,
            description: `Find all of ${data.n}'s links in one place.`,
            images: `http://localhost:3000/api/og?data=${encodeURI(data.n)}`,
            creator: "@sujjeeee",
        },
    }
}

export default function page({ searchParams }: any) {

    if (!searchParams.data) NotFound()

    const data = decodeData(searchParams.data);

    const selectedBgOption = data
        ? BACKGROUND_OPTIONS.find((option) => option.code === data.bg)
        : null;

    const selectedBgComponent = selectedBgOption ? selectedBgOption.component : null;
    return (
        <>
            <div className="fixed left-0 top-0 -z-10 h-full w-full">
                {selectedBgComponent}
            </div>
            <div className='p-2 pt-10 hide_scrollbar'>
                {data ? (
                    <DisplayData acc={data} />
                ) : (
                    <DataLoading />
                )}
            </div>
        </>
    )
}


























// 'use client'

// import React from 'react'
// import { notFound, useSearchParams } from 'next/navigation'
// import DisplayData from '@/components/DisplayData'
// import { decodeData } from '@/lib/utils'
// import DataLoading from './loading'
// import { BACKGROUND_OPTIONS } from '@/components/background/BgSnippets'

// export default function Links() {
//     const searchParams = useSearchParams()
//     const acc = searchParams.get('data')

//     if (!acc) {
//         notFound();
//     }
//     const [decodedData, setDecodedData] = React.useState<Acc | null>(null);

//     React.useEffect(() => {
//         if (acc) {
//             const decoded = decodeData(acc);
//             setDecodedData(decoded);
//         }
//     }, [acc]);

//     // Find the matching background component based on the background code
//     const selectedBgOption = decodedData
//         ? BACKGROUND_OPTIONS.find((option) => option.code === decodedData.bg)
//         : null;

//     const selectedBgComponent = selectedBgOption ? selectedBgOption.component : null;


//     return (
//         <>
//             <div className="fixed left-0 top-0 -z-10 h-full w-full">
//                 {selectedBgComponent}
//             </div>
//             <div className='p-2 pt-10 hide_scrollbar'>
//                 {decodedData ? (
//                     <DisplayData acc={decodedData} />
//                 ) : (
//                     <DataLoading />
//                 )}
//             </div>
//         </>
//     );
// }
