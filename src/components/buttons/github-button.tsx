import React from 'react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Github } from 'lucide-react';

export default function GithubButton() {
  return (
    <Link
      target="_blank"
      href="https://github.com/sujjeee/linknode"
      className={buttonVariants()}
    >
      <Github className="mr-2 size-4" />
      Github
    </Link>
  );
}
