import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

const Header=({currentUser})=>(
    <div className='header'>
       <div className='logo-container'>
        <Link to='/' className='logo'><Logo/></Link>
       </div>
       <div className='options'>
       <Link className='option' to='/'>HOME</Link>
          <Link className='option' to='/shop'>SHOP</Link>
          {
            currentUser ? 
             (<Link className='option' to='/signin' onClick={()=>auth.signOut()}>SIGN OUT</Link>)
             :(<Link className='option' to='/signin'>SIGN IN</Link>)
          }
          
       </div>
    </div>
)
 const mapStateToProps=state=>({
    currentUser:state.user.currentUser
 })

export default connect(mapStateToProps)(Header);