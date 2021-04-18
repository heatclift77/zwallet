import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import {TemplatePage} from '../components'
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
          {/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> */}
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
