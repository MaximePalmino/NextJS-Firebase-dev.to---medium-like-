import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { AppProps } from 'next/app'
import { useUserData } from '../lib/auth'
import { useEffect } from 'react'
import { UserContext } from '../lib/context';

const MyApp: React.FC<any> = ({ Component, pageProps }: AppProps) => {



  return (  
    <>  
      <UserContext.Provider value={{ name:'1111', username: 'jeff' }}>
        <Navbar />
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  
  )
  
}

export default MyApp


