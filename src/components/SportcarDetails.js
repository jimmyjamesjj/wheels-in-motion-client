import React, { Component } from 'react'
import axios from 'axios'
import Requestcar from '../components/Requestcar'
import {Link, Redirect} from 'react-router-dom'
import config from '../config'


export default class SportcarDetails extends Component {
    state = {
        sportcars: {},
        user:{} 
      }
    
      componentDidMount(){
        console.log(this.props)
     
       let sportcarsId = this.props.match.params.sportcarsId
        axios.get(`${config.API_URL}/api/Sportcars/${sportcarsId}`)
          .then((response) => {
            this.setState({ sportcars: response.data })
          })
          .catch((err) => {
            console.log(err,'user not found')
          })
      }
    
      
      render() {
        const {sportcars} = this.state
        const {user} = this.props
        
        if (!user) {
            return <Redirect to={'/Signin'} />
        }
        
        return (
          <div>
            <h3> Sport car Details are</h3>
            <div> Sportcar name: {sportcars.carName}</div>
            <div>Tansmission: {sportcars.Transmission}</div>
            <div>Wheeldrive: {sportcars.wheelDrive}</div>
            <div>Horsepower: {sportcars.Horsepower}</div>
            <div>Insured: {sportcars.insurance}</div>    
            <div>Car Model: {sportcars.carModel}</div>
            
            
            <Link to="/Requestcar">Request to hire this car</Link>

            {/* <Requestcar/> */}
           
          </div>
        )
      }
    }


    