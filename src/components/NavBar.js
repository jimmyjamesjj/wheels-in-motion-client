import React, { Component } from 'react'
import 'bulma/css/bulma.css'

 class NavBar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-primary">
            Log in
          </a>
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