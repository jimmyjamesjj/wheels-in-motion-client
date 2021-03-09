import axios from 'axios'
import React, { Component } from 'react'
import config from '../config'
import {Link, Redirect} from 'react-router-dom'
import SportcarDetails from '../components/SportcarDetails'
import NavBar from '../components/NavBar'


 class HomePage extends Component {
    //  state ={
    //      sportcar:[]
    //  }
    //  componentDidMount(){
    //     axios.get(`${config.API_URL}/api/Sportcar`)
    //       .then((response) => {
    //           console.log(response.data)
    //         this.setState({ sportcar: response.data })
    //       })
    //       .catch(() => {
    //       })
    //   }
    
      render() {
        const {sportcars} = this.props
        const {user, loggedInUser} = this.props
        let styles ={
          width:'550px',
          height: '400px',
          margin: '0px'
        }
      
        return (
          <div>
            <NavBar />
            <h2>sport car posts</h2>

            {

              sportcars.map((sportcars)=>{
                return <div className="pics" key={sportcars._id}> {sportcars.carName}  
                
                 { 
          sportcars.image ? (
            
            <img style={styles} className="image is-128x128" width="4000px" src={sportcars.image} alt={sportcars.carName} />
          ) : null
               }
        
        <Link  to={`/SportcarDetails/${sportcars._id}`}   >  
                

              <button user={loggedInUser} class="button is-info">view details</button> 
            </Link>
            
                 </div>
                 
              })
            }
            
            
    
          </div>
        )
      }
    }

export default HomePage











// render() {
//   const {todos} = this.props
//   return (
//     <div>
//         <h4>My Todos</h4>
//         {
//           todos.map((todo) => {
//             return <Link key={todo._id} to={`/todos/${todo._id}`}>
//               <div >{todo.name}</div>
//               </Link>
//           })
//         }
      
//     </div>
//   )
// }