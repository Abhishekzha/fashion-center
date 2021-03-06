import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    
    handleSubmit=async event=>{
       event.preventDefault();
       const {displayName,email,password,confirmPassword}=this.state;
       if(password!==confirmPassword){
           alert("Password did not match")
           return;
       }
       try{
          const {user}=await auth.createUserWithEmailAndPassword(email,password);
          await createUserProfileDocument(user,{displayName});
          this.setState({
              displayName:'',
              email:'',
              password:'',
              confirmPassword:''
          })
       }catch(error){
           console.log("Error signing up",error);
       }
    }

    handleChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
    }

    render(){
        const {displayName,email,password,confirmPassword}=this.state;
        return(
          <div className='sign-up'>
              <h3 className='title'>Sign up with email and password !</h3>
            <form onSubmit={this.handleSubmit}>
                <FormInput type='text' name='displayName' value={displayName} label='Display Name' handleChange={this.handleChange} />
                <FormInput type='email' name='email' value={email} label='Email' handleChange={this.handleChange}/>
                <FormInput type='password' name='password' value={password} label='Password' handleChange={this.handleChange} />
                <FormInput type='password' name='confirmPassword' value={confirmPassword} label='Confirm Password' handleChange={this.handleChange} />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
          </div>
        )
    }
}
export default SignUp;