import { ReactNode } from 'react';
import { getAllPages } from '@/app/lib/seo-data';

export async function generateStaticParams() {
  const pages = getAllPages();
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
