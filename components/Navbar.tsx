import Link from "next/link";
import { useContext, useEffect } from "react";
import { UserContext } from "../lib/context";


const Navbar: React.FC = ({}) => {

const {user, username} = useContext(UserContext)





        return (

          <nav className="navbar">
            <ul>
              <Link href="/">
                <li>
                  App
                </li>
              </Link>
              <Link href="/enter">
                <li>
                   <button className="btn-blue">Log in</button>
                </li>
              </Link>
            </ul>
          </nav>
        )

}

export default Navbar