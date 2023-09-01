"use client"
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card } from '../ui/card';
import { useDraggable } from '@dnd-kit/core';

import { Input } from '../ui/input';
import { Label } from '../ui/label';

export const SortableLinks = ({ id }: any) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} key={id}>
            <Card className='p-4 relative' >
                <div className='space-y-4'>
                    <div className="grid md:grid-cols-2 gap-2" >
                        <div className="grid gap-2">
                            <Label htmlFor={`icon-key`}>Icon Key</Label>
                            <Input
                                type="text"
                                placeholder="ri:4k-fill"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="link-name">Lable</Label>
                            <Input
                                id="link-name"
                                type="text"
                                placeholder="Amazon"
                            />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="link-url">Destination URL</Label>
                        <Input
                            id="link-url"
                            type="url"
                            placeholder="http://example.com"

                        />
                    </div>
                </div>
                <button className="DragHandle absolute -top-2 right-5 bg-white" {...attributes} {...listeners}>
                    <svg viewBox="0 0 20 20" width="15">
                        <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"
                            transform="rotate(-90,10,10)"
                            fill={"currentcolor"}></path>
                    </svg>
                </button>
            </Card>
        </div>
    )
}