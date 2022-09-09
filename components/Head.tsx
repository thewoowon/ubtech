import NextHead from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { MetaProps } from '../types/layout'

export const WEBSITE_HOST_URL = 'https://ub-tech.vercel.app';

const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
  const router = useRouter();
  const meta: MetaProps = {
    title: '유비케어 기술블로그',
    description:
      '세상이 꿈꾸던 헬스케어',
    image: `${WEBSITE_HOST_URL}/images/ubTech_Blog_Preview.png`,
    type: 'Blog',
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="UBcare 기술블로그" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
    </NextHead>
  );
};

export default Head;
