// "use client"

// import React, { FC } from 'react'
// import { Button } from "@/components/ui/button"
// import { Drawer } from "vaul"
// import { DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
// import DisplayData from "@/components/DisplayData"

// interface MobilePreviewProps {
//     data: Acc
// }

// const MobilePreview: FC<MobilePreviewProps> = ({ data }) => {
//     return (
//         <Drawer.Root>
//             <DrawerTrigger asChild>
//                 <Button className="rounded-full max-w-[350px] w-full tracking-wide" >
//                     Preview page
//                 </Button>
//             </DrawerTrigger>
//             <DrawerContent className="h-[75%] p-6 pt-10">
//                 <DisplayData acc={data} />
//             </DrawerContent>
//         </Drawer.Root>
//     )
// }

// export default MobilePreview