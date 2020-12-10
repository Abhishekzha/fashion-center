import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    } 
      handleSubmit=event=>{
          event.preventDefault();
          this.setState({email:'',password:''})
      }
      handleChange=event=>{
          const {name,value}=event.target;
          this.setState({[name]:value});
      }

    render(){
        const {email,password}=this.state;
        return(
            <div className='sign-in'>
                <h3>Already have an Account ?</h3><br/>
                <h4>Sign in with email and password ! </h4>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' value={email} handleChange={this.handleChange} label='Email' required />
                    <FormInput type='password' name='password' value={password} handleChange={this.handleChange} label='Password' />
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;