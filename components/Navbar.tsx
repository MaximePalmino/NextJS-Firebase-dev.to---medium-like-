import Link from "next/link";

const Navbar: React.FC = ({}) => {


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