"use client"

import React, { FC } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'

import { Button } from '@/components/ui/button'
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { SortableLinks } from '../test/SortableLinks';
import {
    restrictToVerticalAxis,
    restrictToParentElement,
} from '@dnd-kit/modifiers';

interface AdditionalLinksFormProps {
    links: AdditionalLinkProps[];
    onUpdate: (links: AdditionalLinkProps[]) => void;
}

const AdditionalLinksForm: FC<AdditionalLinksFormProps> = ({ links, onUpdate }) => {

    const scrollDownRef = React.useRef<HTMLDivElement | null>(null)
    const [shouldScroll, setShouldScroll] = React.useState(false);

    const [first, setFirst] = React.useState<number[]>([]); // Provide a type annotation for 'first'

    let setIndex = Date.now()
    const addLinkDetailForm = () => {
        setFirst((prev) => [...prev, setIndex]);
        console.log('cureent id', setIndex)
        console.log('cureent state id', first)
        setShouldScroll(true);

    };
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    React.useEffect(() => {
        if (shouldScroll && scrollDownRef.current) {
            scrollDownRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            setShouldScroll(false);
        }
    }, [shouldScroll]);

    function handleDragEnd(event: any) {
        const { active, over } = event;

        if (active.id !== over.id) {
            setFirst((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    return (
        <>
            <Card className='w-full'>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Extra Links</CardTitle>
                    <CardDescription>
                        Enter your additional link details here.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                        modifiers={[restrictToVerticalAxis, restrictToParentElement]}
                    >
                        <SortableContext
                            items={first}
                            strategy={verticalListSortingStrategy}
                        >
                            {first.map((id, index) => {
                                console.log('new id', id); // Log the id within the block
                                return <SortableLinks key={index} id={id} />;
                            })}
                        </SortableContext>
                    </DndContext>
                    <Button
                        variant={"outline"}
                        onClick={addLinkDetailForm}
                    >
                        +
                    </Button>
                </CardContent>
            </Card>
            <div ref={scrollDownRef}></div>
        </>
    )
}

export default AdditionalLinksForm