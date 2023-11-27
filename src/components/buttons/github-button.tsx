import Link from 'next/link';
import React from 'react';
import { buttonVariants } from '../ui/button';
import { Github } from 'lucide-react';

export default function GithubButton() {
  return (
    <Link
      target="_blank"
      href="https://github.com/sujjeee/linknode"
      className={buttonVariants()}
    >
      <Github className="mr-2 h-4 w-4" />
      Github
    </Link>
  );
}
