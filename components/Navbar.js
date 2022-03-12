import Link from "next/link";


const Navbar = () => {
    const user = null
    const username = null

        return (

            <nav className="navbar">
                <ul>
                    <li>
                        <Link href="/">
                            <button>FEED</button>
                        </Link>
                    </li>
                    { /* user is signed-in and has username */}
                    {username && (

                        <>
                            <li className="push-left">
                                <Link href="/admin">
                                    <button>Write Posts</button>
                                </Link>
                            </li>
                            <li className="push-left">
                                <Link href={`/${username}`}>
                                    <img src={user?.photoURL} />
                                </Link>
                            </li>
                        </>
                    )}
                    {!username && (

                        <>
                            <li className="push-left">
                                <Link href="/enter">
                                    <button>Log in</button>
                                </Link>
                            </li>
                        </>
                    )}

                </ul>
                
                
            </nav>
        )

}

export default Navbar