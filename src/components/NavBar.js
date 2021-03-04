import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import {Link} from  'react-router-dom'

 class NavBar extends Component {
    render() {
        return (
          
            <div>
              
                <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      
    

      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <Link to="/Signup" class="button is-primary">
            <strong>Sign up</strong>
          </Link>
          <Link to="/Signin" class="button is-primary"> 
          <strong>Log in</strong>
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>


            </div>
        )
    }
}


export default NavBar