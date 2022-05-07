import React,{ Fragment } from 'react'
import logo from '../../assets/HR.svg'
import {Link, Outlet} from 'react-router-dom'
import { Div} from './style'


const Navbar = () =>{
    
    return(
      <Div>
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
                        <Link to='/auth'>
                                Sign-in
                        </Link>
                    </Div>
                    
                    
                </Div>
            </Div>
        <Outlet/>
        </Fragment>
    </Div>
    )
  }
  export default Navbar;