import React from 'react';
import { Button } from '../ui/button';
import { useData } from '@/lib/context/LinkContext';

type BgContainerProps = {
    children: React.ReactElement;
};

const BgContainer: React.FC<BgContainerProps> = ({
    children,
}) => {
    const { selectBackground } = useData()
    return (
        <Button
            variant={"outline"}
            className="relative min-h-[60px] min-w-[150px] overflow-hidden"
            onClick={() => {
                selectBackground(children)
            }}>
            {children}
        </Button>
    );
};

export default BgContainer;