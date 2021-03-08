import React, { Component } from 'react'
import NewPost from '../components/NewPost'
import Signin from '../components/Signin'
import Signup from '../components/Signup'
import {Link} from    'react-router-dom'

class profile extends Component {
 
    render() {
      const {sportcars} = this.props
        const {onDelete, user} = this.props

        let styles ={
          width:'550px',
          height: '400px'
           }
          //  let filteredsportcar = sportcars.filter((sportcars)=>{

          //   if(!user._id==this.props.user){
          //     return filteredsportcar
          //   }
             
          //  })

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
              <Link to="/NewPost"> create car post  </Link>
              
            
            <h2>my sport car posts</h2>
            {
              sportcars.map((sportcars)=>{
                return <div className="pics" key={sportcars._id}> {sportcars.carName}  
                 { 
              sportcars.image ? (
              <img style={styles} className="image is-128x128" width="4000px" src={sportcars.image}
              alt={sportcars.carName} />
              ) : null
               }
        
            <Link  to={`/SportcarDetails/${sportcars._id}`}   >  
              <button class="button is-info">view details</button> 
            </Link>

            <Link to={`/Sportcars/${sportcars._id}/edit`}>
              <button className="button is-info"> Edit</button>
            </Link>
            <button className="button is-danger" onClick={() => { onDelete(sportcars._id)  } } >Delete</button>
            <p></p>
            
                 </div>
                 
              })
            }
            
            
    
         


           

               
            </div>
        )
    }
}


export default profile