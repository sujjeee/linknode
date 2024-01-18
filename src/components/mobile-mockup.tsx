'use client';

import React from 'react';
import DisplayData from '@/components/display-data';
import { useData } from '@/lib/context/link-context';
import { BACKGROUND_OPTIONS } from '@/components/backgrounds/background-snippets';
import { cn, isEmptyValues } from '@/lib/utils';

const MobileMockup = React.memo(() => {
  const { data } = useData();

  const [isEmpty, setIsEmpty] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsEmpty(isEmptyValues(data));
  }, [data]);

  const selectedBgOption = data
    ? BACKGROUND_OPTIONS.find((option) => option.code === data.bg)
    : null;

  const selectedBgComponent = selectedBgOption
    ? selectedBgOption.component
    : null;

  return (
    <div className="relative z-50 mx-auto h-[700px] w-[350px] min-w-[350px] rounded-[42px] border-[14px] border-primary bg-primary shadow-xl ">
      <div className="absolute left-1/2 top-0 z-50 h-[18px] w-[148px] translate-x-[-50%] rounded-b-[1rem] bg-primary"></div>
      <div className="absolute left-[-17px] top-[124px] z-50 h-[46px] w-[4px] rounded-l-lg bg-primary"></div>
      <div className="absolute left-[-17px] top-[178px] z-50 h-[46px] w-[4px] rounded-l-lg bg-primary"></div>
      <div className="absolute right-[-17px] top-[142px] z-50 h-[64px] w-[4px] rounded-r-lg bg-primary"></div>
      <div
        className={cn(
          'relative size-full overflow-hidden break-words rounded-[32px]',
          { 'bg-white': !data.bg },
        )}
      >
        {isEmpty ? (
          <div className="z-20 flex size-full items-center justify-center bg-white text-sm text-muted-foreground">
            No information.
          </div>
        ) : (
          <>
            {!isEmpty && selectedBgComponent}
            <div className="h-full px-2 pt-10">
              <DisplayData acc={data} />
            </div>
          </>
        )}
      </div>
    </div>
  );
});

// added display due to eslint error
MobileMockup.displayName = 'MobileMockup';
export default MobileMockup;
