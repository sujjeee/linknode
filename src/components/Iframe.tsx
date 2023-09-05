// origial code: https://gist.github.com/threepointone/e73a87f7bbbebc78cf71744469ec5a15

import { Suspense, useLayoutEffect, useRef, useState } from 'react';
import IframeLoader from './IframeLoader';

type IFrameProps = React.ComponentPropsWithRef<'iframe'> & {
    fallback?: JSX.Element;
};

export function IFrame(props: IFrameProps) {
    const { fallback, ...rest } = props;

    return (
        <Suspense fallback={fallback || <IframeLoader />}>
            <IFrameImplementation {...rest} />
        </Suspense>
    );
}

function IFrameImplementation(props: React.ComponentPropsWithRef<'iframe'>) {
    const awaiter = useRef<null | {
        promise: null | Promise<void>;
        resolve: () => void;
        reject: () => void;
    }>(null);
    const [_, triggerLoad] = useState(false)
    if (awaiter.current?.promise) {
        console.log('suspend')
        throw awaiter.current.promise;
    }
    useLayoutEffect(() => {
        if (awaiter.current === null) {
            // @ts-ignore
            awaiter.current = {}
            // @ts-ignore
            awaiter.current.promise = new Promise<void>((resolve, reject) => {
                if (awaiter.current) {
                    Object.assign(awaiter.current, { resolve, reject });
                }
            });
            triggerLoad(true)
        }
    }, []);
    const { title } = props;
    return (
        <iframe
            {...props}
            title={title}
            onLoad={(e) => {
                // @ts-ignore
                awaiter.current.promise = null;
                awaiter.current?.resolve();
                props.onLoad?.(e);
            }}
            onError={(err) => {
                // @ts-ignore
                awaiter.current.promise = null;
                awaiter.current?.reject();
                props.onError?.(err);
            }}
        />
    );
}

export default IFrame;