import type { Metadata } from 'next';
import { getPageData, getAllPages } from '@/app/lib/seo-data';

export async function generateStaticParams() {
  const pages = getAllPages();
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pageData = getPageData(slug);

  if (!pageData) {
    return {
      title: 'Page non trouvée - WebPrestige',
      robots: { index: false, follow: false },
    };
  }

  const url = `https://webprestige.fr/${slug}`;

  return {
    title: `${pageData.h1} | WebPrestige`,
    description: pageData.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageData.h1,
      description: pageData.description,
      url,
      locale: 'fr_FR',
      type: 'website',
      siteName: 'WebPrestige',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `WebPrestige - ${pageData.h1}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageData.h1,
      description: pageData.description,
    },
  };
}

export default function SlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
