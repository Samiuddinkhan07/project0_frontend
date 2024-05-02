import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { SignUpContainer } from '../../styles/LayoutStyles';

const Login = () => {
//   const navigate = useNavigate();
  const [loginDet,setLoginDet] = React.useState({
    email:"",
    password:"",
    _err:[]
  });

  const isValidEmail = (email) => {
    const emailPattern = new RegExp(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    );
    return emailPattern.test(email);
  };

  const loginHandler = async (e) =>{
    e.preventDefault();
    if (loginDet.password.length < 6) {
      setLoginDet({...loginDet,_err:["Password Must be not be less than 6 characters"]})
  }
  if (!isValidEmail(loginDet.email)) {
    setLoginDet({...loginDet,_err:["Invalid Email"]})
  }else{
    console.log("Valid Email") 
  }

  }

  React.useEffect(() =>{

  },[])
  return (
    <SignUpContainer>
    <form  className="form-wrapper" onSubmit={loginHandler}>
      <h1>Login</h1>
      {(loginDet._err.length > 0) && 
          <ul className="err-msg">
            {loginDet._err.map((e,i) =>{
             return <li key={i}>{e}</li>
            })}
          </ul>
      }
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name=""
        id="email"
        onChange={(e) => setLoginDet({ ...loginDet, email: e.target.value })}
      />
      <label htmlFor="psw">Password</label>
      <input
        type="password"
        name=""
        id="password"
        onChange={(e) => setLoginDet({ ...loginDet, password: e.target.value })}
      />
      <button>Submit</button>
      <p>
        Dont have a account? <Link to="/signup">Sign Up</Link>
      </p>
    </form>
  </SignUpContainer>
  )
}

export default Login