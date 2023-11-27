import React from 'react';

export default function SiteFooter() {
  return (
    <footer className="fixed bottom-0 w-full py-4 text-center text-sm backdrop-blur-md">
      <a
        href="https://linknode.vercel.app/"
        target="_blank"
        className="text-slate-300 underline-offset-2 hover:text-slate-400 hover:underline"
      >
        Made with linknode
      </a>
    </footer>
  );
}
