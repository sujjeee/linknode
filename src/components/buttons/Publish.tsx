"use client"

import React, { FC } from 'react'
import { Button } from '../ui/button'
import { encodeData } from '@/lib/utils';
import { useData } from '@/lib/context/LinkContext';
import { Send } from 'lucide-react';

interface PublishProps { }

const Publish: FC<PublishProps> = ({ }) => {
    const { data } = useData()

    function isEmptyValues(obj: any) {
        for (let key in obj) {
            if (obj[key] !== "" && obj[key].length !== 0) {
                return false;
            }
        }
        return true;
    }

    function publish() {
        const isEmpty = isEmptyValues(data)
        if (isEmpty) {
            alert("Can't publish with empty fields!");
        } else {
            const url = `${window.location.origin}/1?data=${encodeData(data)}`;
            navigator.clipboard.writeText(url).then(() => {
                alert('Link copied to clipboard');
            });
        }
    }

    return (
        <Button className='w-full' onClick={publish}>
            <Send className='mr-2 h-4 w-4' />
            Publish
        </Button>
    )
}

export default Publish