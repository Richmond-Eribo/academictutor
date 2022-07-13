/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['ui'])

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'localhost'],
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
