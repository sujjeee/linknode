'use client';

import React from 'react';
import { Drawer } from 'vaul';
import { isEmptyValues } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import DisplayData from '@/components/display-data';
import { useData } from '@/lib/context/link-context';
import { DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { BACKGROUND_OPTIONS } from '@/components/backgrounds/background-snippets';

export default function PreviewButton() {
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
    <div className="fixed inset-x-0 bottom-0 z-10 flex items-center justify-center p-4 backdrop-blur-sm ">
      <Drawer.Root>
        <DrawerTrigger asChild>
          <Button className="w-full max-w-[350px] overflow-y-auto rounded-full tracking-wide">
            Preview page
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[75%] pb-2">
          {isEmpty ? (
            <div className="flex h-[90%] w-full items-center justify-center text-sm text-muted-foreground">
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
        </DrawerContent>
      </Drawer.Root>
    </div>
  );
}
