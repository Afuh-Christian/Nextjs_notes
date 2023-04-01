import loginstyle from './Login.module.css'
import Link from 'next/link';

function Login() {
    return ( 
        <section className={loginstyle.section}>
        <div>
        <form action="">
            <div>
            {/* <!-- <div className={loginstyle.username}>
                <label for="username">Username : </label>
                <input type="text" name="username" id="username" placeholder="Enter Username"/>
            </div> --> */}
            <div className={loginstyle.email}>
                <label htmlfor="email">Email : </label>
                <input type="email" name="email"  placeholder="Enter Email"/>
            </div>
            <div className={loginstyle.password}>
                <label for="password">Password : </label>
                <input type="password" name="password" id="password" placeholder="Enter password"/>
            </div>
           
        </div>

            <div className={loginstyle.submit}>
                <button type="submit">Login</button>
            </div>
            
            <div className={loginstyle.login}>
                <p>Don't have an account yet :  <Link href="/Register">Sign Up</Link></p>
            </div>
        </form>
    </div>
    </section>
 
     );
}

export default Login;