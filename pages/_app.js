import Head from 'next/head'
import '../styles/globals.scss'

const VLVApp = ({ Component, pageProps }) => {
  return (
      <>
      <Head>
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1" 
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        <link
          rel="shortcut icon"
          type="image/svg"
          href="/img/hotel-solid.svg"
        />  
        <title>Vision Luxury Villas | True Relaxation</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default VLVApp 