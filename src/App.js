import React from 'react';
import './App.css';
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
         <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop' component={ShopPage}/>
         </Switch>
         </div>
       
       )
    }
  }
  
export default App;
