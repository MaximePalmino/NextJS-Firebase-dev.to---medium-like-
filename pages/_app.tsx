import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { AppProps } from 'next/app'
import { UserContext } from '../lib/context';
import useUserData from '../lib/hook';
import { useEffect } from 'react';
import { useContext } from 'react';


const MyApp: React.FC<any> = ({ Component, pageProps }: AppProps) => {



  const userData: any = useUserData()



  return (  
    <>  
      <UserContext.Provider value={userData}>
        <Navbar />
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  
  )
  
}

export default MyApp


