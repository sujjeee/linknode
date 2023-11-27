import SiteFooter from '@/components/layouts/site-footer';

interface PagesLayoutProps {
  children: React.ReactNode;
}

export default function LinksLayout({ children }: PagesLayoutProps) {
  return (
    <>
      <main className="mb-[10vh] flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
