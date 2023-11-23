import { type NextRequest } from 'next/server';
import type { ServerRuntime } from 'next';
import { ImageResponse } from '@vercel/og';

export const runtime: ServerRuntime = 'edge';

function truncateString({
  str,
  maxLength,
}: {
  str: string;
  maxLength: number;
}) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength);
  }
  return str;
}

export function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const { data } = Object.fromEntries(url.searchParams);

    if (!data || !data.trim()) {
      return new Response('Data not in URL or empty.', {
        status: 400,
      });
    }
    const maxNameLength = 25;
    let name = data.trim();
    name = truncateString({ str: name, maxLength: maxNameLength });
    return new ImageResponse(
      (
        <div tw="mx-auto flex h-full w-full flex-col items-center justify-center bg-white">
          <div
            tw="flex px-8 text-6xl font-bold leading-tight tracking-tight"
            style={{ overflowWrap: 'break-word' }}
          >
            {name}&#39;s - LinkNode
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.error(error);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
