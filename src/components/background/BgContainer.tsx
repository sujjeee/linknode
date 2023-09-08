import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { toast } from 'sonner';
import { Card } from '../ui/card';

type BgContainerProps = {
    children: React.ReactElement;
};

const BgContainer: React.FC<BgContainerProps> = ({
    children,
}) => {

    return (
        <Card className="relative min-h-[200px] min-w-[150px] overflow-hidden">
            {/* <Card> */}
            {children}
            {/* </Card> */}
        </Card>
    );
};

export default BgContainer;