import '../styles/globals.css'
import {MoralisProvider} from "react-moralis"
function MyApp({ Component, pageProps }) {
  return(
    <MoralisProvider
      appId="mbH4DJOsRPhRJDz91bw549pyNCrN2IP3B55X1HJf"
      serverUrl="https://kl2v128s0uzy.usemoralis.com:2053/server"
    >
      {
        <Component {...pageProps} />
      }
    </MoralisProvider> 
  );
  
}

export default MyApp
