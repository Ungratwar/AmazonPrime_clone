import React, { useState } from "react";
import "./Login.css";
import Logo from "../Images/logo2.png";
import Signup from "./Signup";



const Login = () => {

    const [veiw, setVeiw] = useState(false);
    const [emailid, setEmailid] = useState();
    const [password, setPassword] = useState();
    const [login, setLogin] = useState();
    console.log(emailid);
    console.log(password);
    console.log(login);


    const submitHandler = (e) => {
        e.preventDefault();
        const logindata = {
            emailid: emailid,
            password: password

        }
        console.log(logindata);
        setLogin(logindata);

    }


    return (
        <>

            <div className="loginContainer">
                <div className="Logosign"><img className="Logo" src={Logo} alt="" /></div>

                <div className="formContainer">
                    <h1>Sign-in</h1>
                    <form onSubmit={submitHandler}  >
                        <label htmlFor="Tital" className="Tital">Email or Mobaile Number</label><br />
                        <input type="Emailid" className="email" name="emailid" onChange={e => setEmailid(e.target.value)} /><br /><br />
                        <label htmlFor="Tital" className="Tital2">Password</label><br />
                        <input type="password" className="email" name="password" onChange={e => setPassword(e.target.value)} /><br /><br />

                        <input type="submit" className="signin" name="login" />

                    </form><br /><br />
                    <p>By continuing, you agree to Amazon &nbsp;<span>Conditions of<br />Use and Privacy Notice.</span> </p><br /><br />

                    <input type="checkbox" placeholder="Keep me signed in." />&nbsp;
                    <label htmlFor="lable">Keep me signed in.</label><br /><br />

                    <button className="signin" onClick={() => setVeiw(!veiw)} >Create Your Amazon Account</button>
                </div><br /><br /><br />

                {veiw ? <Signup /> : null}
                <div className="footer">
                    <p>Condition of use&nbsp; &nbsp; privasy Notice &nbsp; &nbsp; Help</p>

                    <span> &#169; 1996-2022, Amazon.com,inc,or its affiliates</span>

                </div>
            </div>




        </>
    );
}
export default Login;