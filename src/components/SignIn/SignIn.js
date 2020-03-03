import React, { useState, useEffect } from 'react';



function SignIn(props) {

const [signInEmail, setsignInEmail] = useState("");
const [signInPassword, setsignInPassword] = useState("");

const onEmailChange = (event) => {
    setsignInEmail({signInEmail: event.target.value})
  }

const onPasswordChange = (event) => {
    setsignInPassword({signInPassword: event.target.value})
  }

  console.log(signInEmail.signInEmail);
  console.log(signInPassword);

  const onSubmitSignIn = () => {
      if (signInEmail.signInEmail === "test@gmail.com" && signInPassword.signInPassword === "test") {
        props.onRouteChange('mainlist');
      } else {
          console.log(signInPassword);
      }
      
    }

  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="washed-blue f1 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="washed-blue db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input 
        onChange={onEmailChange} 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email" 
        name="email-address"  
        id="email-address"/>
      </div>
      <div className="mv3">
        <label className="washed-blue db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input 
        onChange={onPasswordChange}
        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="password" 
        name="password"  
        id="password"/>
      </div>
    </fieldset>
    <div className="">
      <input 
      onClick={onSubmitSignIn}
      className="washed-blue  b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      type="submit" 
      value="Sign in"/>
    </div>
    <div className="lh-copy mt3">
      {/* <p  
      onClick={()=>this.props.onRouteChange("register")} 
      href="#0" className="f6 link dim black db pointer">Register</p> */}
    </div>
  </div>
</main>
</article>
  );
}

export default SignIn;
