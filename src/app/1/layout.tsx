import SiteFooter from '@/components/layouts/SiteFooter';

interface PagesLayoutProps {
  children: React.ReactNode;
}

export default function LinksLayout({ children }: PagesLayoutProps) {
  return (
    <>
      <main className="flex-1 mb-[10vh]">{children}</main>
      <SiteFooter />
    </>
  );
}
