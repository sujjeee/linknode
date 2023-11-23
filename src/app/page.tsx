import React from 'react';
import Link from 'next/link';
import AdditionalLinksForm from '@/components/forms/AdditionalLinksForm';
import ProfileForm from '@/components/forms/ProfileForm';
import SocialLinksForm from '@/components/forms/SocialLinksForm';
import MobileMockup from '@/components/MobileMockup';
import PreviewButton from '@/components/buttons/PreviewButton';
import DemoData from '@/components/buttons/DemoData';
import { buttonVariants } from '@/components/ui/button';
import Publish from '@/components/buttons/Publish';
import { Github } from 'lucide-react';
import ShortenerButton from '@/components/buttons/ShortenerButton';
import Background from '@/components/background/Background';

export const siteConfig = {
  name: 'LinkNode - one page, many links.',
  description:
    'LinkNode is an open-source tool that helps you generate one link for all your links.',
  ogImage: 'https://linknode.vercel.app/og-image.png',
  url: 'https://linknode.vercel.app',
};

export default function Home() {
  return (
    <main className="relative grid h-screen px-2 md:container lg:grid-cols-3 lg:px-0">
      <section className="flex h-screen flex-col items-center justify-center gap-6 py-6 lg:col-span-2 lg:px-20">
        <div className="hide_scrollbar flex w-full flex-col gap-5 overflow-y-auto pb-20 lg:pb-0">
          <ProfileForm />
          <SocialLinksForm />
          <AdditionalLinksForm />

          <Background />

          <div className="grid w-full grid-cols-2 items-center justify-center gap-2 md:grid-cols-4 ">
            <DemoData />
            <Publish />
            <ShortenerButton />
            <Link
              target="_blank"
              href="https://github.com/sujjeee/linknode"
              className={buttonVariants()}
            >
              <Github className="mr-2 h-4 w-4" />
              Github
            </Link>
          </div>
        </div>
      </section>

      <section className="hidden items-center justify-end lg:flex">
        <MobileMockup />
      </section>

      <div className="lg:hidden">
        <PreviewButton />
      </div>
    </main>
  );
}
