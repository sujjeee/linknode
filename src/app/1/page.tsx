import { decodeData } from '@/lib/utils';
import NotFound from '@/app/not-found';
import { BACKGROUND_OPTIONS } from '@/components/backgrounds/background-snippets';
import DisplayData from '@/components/display-data';
import DataLoading from '@/app/1/loading';
import LinkPageError from '@/app/1/error';

interface SearchParamsProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}

export function generateMetadata({ searchParams }: SearchParamsProps) {
  const { data: queryData } = searchParams;

  if (!queryData) return NotFound();

  const data = decodeData(queryData);

  if (!data) return null;

  return {
    title: `${data.n}'s`,
    description: `Find all of ${data.n}'s links in one place.`,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://linknode.vercel.app',
      title: `${data.n}'s - LinkNode`,
      description: `Find all of ${data.n}'s links in one place.`,
      images: `https://linknode.vercel.app/api/og?data=${encodeURI(
        data.n ? data.n : 'Made with linknode',
      )}`,
      siteName: `${data.n}'s - LinkNode`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.n} - LinkNode`,
      description: `Find all of ${data.n}'s links in one place.`,
      images: `https://linknode.vercel.app/api/og?data=${encodeURI(
        data.n ? data.n : 'Made with linknode',
      )}`,
      creator: '@sujjeeee',
    },
  };
}

export default function page({ searchParams }: SearchParamsProps) {
  if (!searchParams.data) return NotFound();

  const data = decodeData(searchParams.data);

  if (!data) return <LinkPageError />;

  const selectedBgOption = data
    ? BACKGROUND_OPTIONS.find((option) => option.code === data.bg)
    : null;

  const selectedBgComponent = selectedBgOption
    ? selectedBgOption.component
    : null;

  return (
    <>
      <div className="fixed left-0 top-0 z-[-10] size-full">
        {selectedBgComponent}
      </div>
      <div className="hide_scrollbar p-2 pt-10">
        {data ? <DisplayData acc={data} /> : <DataLoading />}
      </div>
    </>
  );
}
