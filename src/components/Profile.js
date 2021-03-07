import React, { Component } from 'react'
import NewPost from '../components/NewPost'
import Signin from '../components/Signin'
import Signup from '../components/Signup'
import {Link} from    'react-router-dom'

class profile extends Component {
    render() {
        return (
            
            <div>
                 {
            this.props.user ? (
              <button className="button is-warning" onClick={this.props.onLogout}>Logout</button>
            ) : (
              <>
                <Link  style={{marginLeft: '10px'}}  to="/Signin">SignIn</Link>
                <Link  style={{marginLeft: '10px'}}  to="/Signup">SignUp</Link>
              </>
            )
          }
                <NewPost submitPost= {this.props.onSubmit}/>

                <h1>welcome to your profile page</h1>
            </div>
        )
    }
}


export default profile