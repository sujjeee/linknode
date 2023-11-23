import SiteFooter from '@/components/layouts/SiteFooter';

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
