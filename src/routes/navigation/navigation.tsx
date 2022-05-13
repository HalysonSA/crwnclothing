import React,{ Fragment, useContext } from 'react'
import logo from '../../assets/HR.svg'
import {Link, Outlet} from 'react-router-dom'

import CardIcon from '../../components/cardIcon/cardIcon'
import CartDropdown from '../../components/cartDropdown/CartDropdown'

import { Div} from './style'
import { UserContext } from '../../context/usercontext'
import { CartContext } from '../../context/cartcontext'
import { SignOutUser } from '../../utills/firebase/firebase'
const Navbar = () =>{
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)
    
    return(
      <Div >
        <Fragment>
            <Div className='navbar' >
                <Div>
                    <Link to='/'>
                        <img height='75' width='75' src={logo} alt="ola" /> 
                    </Link>
                        
                </Div>
                <Div className='linkcontainer'>
                    <Div className='link'>  
                        <Link to='/shop'>
                            Shop
                        </Link>
                    </Div>

                    <Div className='link'>
                        {currentUser?(
                            <span onClick={SignOutUser}>Sign out</span>):
                            <Link to='/auth'>
                            Sign in
                            
                        </Link>
                       
                        }
                       
                    </Div>
                    <CardIcon/>
                   
                </Div>
                {isCartOpen && <CartDropdown/>}
            </Div>
        <Outlet/>
        </Fragment>
    </Div>
    )
  }
  export default Navbar;