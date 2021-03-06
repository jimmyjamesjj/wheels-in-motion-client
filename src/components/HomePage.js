import axios from 'axios'
import React, { Component } from 'react'
import config from '../config'
import {Link, Redirect} from 'react-router-dom'
import SportcarDetails from '../components/SportcarDetails'


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
        const {sportcar} = this.props
        return (
          <div>
            <h2>sport car posts</h2>
            {

              sportcar.map((sportcar)=>{
                return <div className="pics" key={sportcar._id}> {sportcar.carName}
                 {
          sportcar.image ? (
            <img  src={sportcar.image} alt={sportcar.name} />
          ) : null
        }
        <Link to={`/SportcarDetails/${sportcar._id}`}>
              <button class="button is-info">view details</button>
            </Link>
                 </div>
              })
            }
            {/* <div> {sportcar.image} </div>
            <div>Name: {sportcar.carName}</div>
            <Link to={`/SportcarDetails/${sportcar._id}`}>
              <button class="button is-info">view details</button>
            </Link> */}
            
    
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