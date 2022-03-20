import { signIn } from "../lib/firebase"



const Enter: React.FC = ({}) => {

    const user: any = null
    const username: any = null



    return (
        <>
            <h1>Hello from Enter</h1>
            {user ? <SignInButton /> : <SignOutButton /> }
        </>
    )
}


function SignOutButton() {

    return (
      <button className="btn-google">
        <img src={'/google.png'} /> Sign OUT with Google
      </button>
    );
  }


function SignInButton() {

    return (
      <button className="btn-google">
        <img src={'/google.png'} /> Sign in with Google
      </button>
    );
  }

  
export default Enter