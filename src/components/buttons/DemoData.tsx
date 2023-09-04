"use client"
import React, { FC } from 'react'
import { Button } from '../ui/button'
import { Play } from 'lucide-react'
import { useData } from '@/lib/context/LinkContext'

interface DemoDataProps {

}

const DemoData: FC<DemoDataProps> = ({ }) => {
    const { showDemo } = useData()
    return (
        <Button className='w-full' onClick={showDemo}>
            <Play className='mr-2 h-4 w-4' />
            Demo
        </Button>
    )
}

export default DemoData