import React, { Component } from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import config from '../config'
import Requestcar from '../components/Requestcar'

 class SportcarDetails extends Component {
    state = {
        sportcar: []
      }
    
      componentDidMount(){
        
     
       let sportcarId = this.props.match.params.sportcarId
        axios.get(`${config.API_URL}/api/Sportcar/:${sportcarId}`)
          .then((response) => {
            this.setState({ sportcar: response.data })
          })
          .catch((err) => {
            console.log(err,'user not found')
          })
      }
    
      render() {
        const {sportcar} = this.state
        const {onDelete, user} = this.props
        // if (!user) {
        //     return <Redirect to={'/Signin'} />
        // }
        //console.log(this.props.sportcar)
        return (
          <div>
            
            <h3> Sport car Details are</h3>
            <div>{sportcar.image } </div>
            <div> Sportcar name: {sportcar.carName}</div>
            <div>Tansmission: {sportcar.Transmission}</div>
            <div>Wheeldrive: {sportcar.wheelDrive}</div>
            <div>Horsepower: {sportcar.Horsepower}</div>
            <div>Insurance: {sportcar.insurance}</div>    
            <div>Car Model: {sportcar.carModel}</div>
            
            <Link to={`/sportcar/${sportcar._id}/edit`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => { onDelete(sportcar._id)  } } >Delete</button>

           <Requestcar/> 
          </div>
        )
      }
    }


    export default SportcarDetails