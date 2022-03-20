import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { AppProps } from 'next/app'


const MyApp: React.FC<any> = ({ Component, pageProps }: AppProps) => {


  return (  
    <>  
    
    <Navbar />
    <Component {...pageProps} />
    </>
  
  )
  
}

export default MyApp
