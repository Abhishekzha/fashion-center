import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import {Switch,Route} from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
   }
    render(){
       return(
         <div>
           <Header/>
         <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop' component={ShopPage}/>
                <Route exact path='/signin' component={SignInAndSignUp}/>
         </Switch>
         </div>
       
       )
    }
  }
  
export default App;
