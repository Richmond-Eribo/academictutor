import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {useEffect, useState} from 'react'
import ScrollToTop from 'components/ScrollToTop'

function MyApp({Component, pageProps}: AppProps) {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 730) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    })
  }
  return (
    <>
      <Component {...pageProps} />
      {showButton && (
        <button onClick={scrollToTop}>
          <ScrollToTop />
        </button>
      )}
    </>
  )
}

export default MyApp
