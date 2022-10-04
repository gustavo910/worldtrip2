import { ChakraProvider, theme } from '@chakra-ui/react'
import {AppProps} from 'next/app'
import '../styles/slider.scss'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App({ Component, pageProps }:AppProps) {
  return(
<ChakraProvider theme={theme}>
 <Component {...pageProps} />
 </ChakraProvider>
  )
}

export default App
