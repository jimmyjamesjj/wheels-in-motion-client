import axios from 'axios'
import React, { Component } from 'react'
import config from '../config'
import {Link, Redirect} from 'react-router-dom'
import SportcarDetails from '../components/SportcarDetails'


 class HomePage extends Component {
     state ={
         sportcar:[]
     }
     componentDidMount(){
        axios.get(`${config.API_URL}/api/Sportcar`)
          .then((response) => {
              console.log(response.data)
            this.setState({ sportcar: response.data })
          })
          .catch(() => {
          })
      }
    
      render() {
        const {sportcar} = this.state
        return (
          <div>
            <div> {sportcar.image}</div>
            <div>Name: {sportcar.carName}</div>
            <Link to={`/SportcarDetails/${sportcar._id}`}>
              <button class="button is-info">view details</button>
            </Link>
            
    
          </div>
        )
      }
    }

export default HomePage