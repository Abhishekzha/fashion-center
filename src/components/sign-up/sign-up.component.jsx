import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

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
    
    handleSubmit=event=>{
         event.preventDefault();
         this.setState({displayName:'',email:'',password:'',confirmPassword:''});
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