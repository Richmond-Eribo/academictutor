/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['ui'])

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'localhost', 'localhost:8000', 'th.bing.com'],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/Login',
  //       permanent: false,
  //     },
  //   ]
  // },
})
