import React,{ Fragment } from 'react'
import logo from '../../assets/HR.svg'
import {Link, Outlet} from 'react-router-dom'

const Navbar = () =>{
    
    return(
      <div>
        <Fragment>
            <div>
                <div>
                    <Link to='/'>
                        <img height='50' width='50' src={logo} alt="ola" /> 
                    </Link>
                        
                </div>
            <div>
                <Link to='/shop'>
                    Shop
                </Link>
                <Link to='/signIn'>
                    Sign-in
                </Link>
            </div>
        </div>
        <Outlet/>
        </Fragment>
    </div>
    )
  }
  export default Navbar;