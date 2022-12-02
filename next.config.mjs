import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: '/story',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/resume',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/resume',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/blog/:yyyy/:mm/:dd/:slug',
        destination: '/articles/:yyyy-:mm-:dd-:slug',
        permanent: true,
      },
    ]
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
