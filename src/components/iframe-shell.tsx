// origial code: https://gist.github.com/threepointone/e73a87f7bbbebc78cf71744469ec5a15

import { Suspense, useLayoutEffect, useRef, useState } from 'react';
import IframeLoader from '@/components/iframe-loader';

type IFrameProps = React.ComponentPropsWithRef<'iframe'> & {
  fallback?: JSX.Element;
};

export function IFrameShell(props: IFrameProps) {
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

  /* eslint-disable @typescript-eslint/no-unused-vars  */
  const [_, triggerLoad] = useState(false);

  if (awaiter.current?.promise) {
    throw awaiter.current.promise;
  }

  useLayoutEffect(() => {
    if (awaiter.current === null) {
      // @ts-expect-error: no need for null check
      awaiter.current = {};
      // @ts-expect-error: no need for null check
      awaiter.current.promise = new Promise<void>((resolve, reject) => {
        if (awaiter.current) {
          Object.assign(awaiter.current, { resolve, reject });
        }
      });
      triggerLoad(true);
    }
  }, []);
  const { title } = props;
  return (
    <iframe
      {...props}
      title={title}
      onLoad={(e) => {
        // @ts-expect-error: no need for null check
        awaiter.current.promise = null;
        awaiter.current?.resolve();
        props.onLoad?.(e);
      }}
      onError={(err) => {
        // @ts-expect-error: no need for null check
        awaiter.current.promise = null;
        awaiter.current?.reject();
        props.onError?.(err);
      }}
    />
  );
}

export default IFrameShell;
