import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import {Switch,Route,Redirect} from 'react-router-dom';
import {auth} from './firebase/firebase.utils';
import {createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
   unSubscribeFromAuth=null;
   componentDidMount(){
    const {setCurrentUser}=this.props;
     this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
          if(userAuth){
            const userRef=await createUserProfileDocument(userAuth);
            userRef.onSnapshot(snapShot=>{
                  setCurrentUser({
                  id:snapShot.id,
                  ...snapShot.data()
                
              })
              console.log(this.state);
            })
          }
          setCurrentUser(userAuth);
     })
   }
   componentWillUnmount(){
     this.unSubscribeFromAuth();
   }

    render(){
      const {currentUser}=this.props;
       return(
         <div>
           <Header/>
         <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop' component={ShopPage}/>
                  <Route render={()=>currentUser?(<Redirect to='/'/>):(<SignInAndSignUp/>)}/>
                
         </Switch>
         </div>
       
       )
    }
  }

 const mapStateToProps=state=>({
   currentUser:state.user.currentUser
 }) 
  
const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
