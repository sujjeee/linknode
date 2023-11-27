import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Info } from 'lucide-react';
import IFrameShell from '@/components/iframe-shell';

export default function GetIconInfo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" id="al" aria-label="icons">
          <Info className="h-4 w-4 text-muted-foreground hover:text-accent-foreground" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Get icon key</DialogTitle>
          <DialogDescription>
            Find the icon that best matches your link and copy the icon key,
            which looks like this:{' '}
            <code className="rounded-md border bg-background px-1 py-0.5">
              ic:sharp-cloud-queue
            </code>
            .
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="rounded-xl bg-[#181818] p-1">
            <IFrameShell
              src="https://icones.js.org/"
              width="100%"
              height="400"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
