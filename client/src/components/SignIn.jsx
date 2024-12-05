import React from 'react'
function SignIn(){
   return <div className="form-container">
<h2>Login</h2>
<form >
    <div className='form-control'>
    <input type="text" placeholder='Enter your email'/>

    </div>
    <div className='form-control'>
    <input type="password" placeholder='Enter your password'/>

    </div>
    <button>Sign In</button>
</form>
<p>Don't have account sign up here</p>
   </div>
}
export default SignIn