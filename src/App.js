import React, {Component} from "react";
import { Switch, Route,withRouter } from "react-router-dom";
import HomePage from './components/HomePage'
import SportcarDetails from './components/SportcarDetails'
import NavBar from './components/NavBar'
import Signup from './components/Signup'
import axios from 'axios'
import config from './config'
import Signin from './components/Signin'
import NewPost from './components/NewPost'
import Profile from './components/Profile'

class App extends Component {
  state={
    sportcar:[]
}
componentDidMount(){
  axios.get(`${config.API_URL}/api/wheelsInMotion`)
    .then((response) => {
      this.setState({ sportcar: response.data})
    })
    .catch(() => {
  
    })

  if (!this.state.loggedInUser) {
    axios.get(`${config.API_URL}/api/User`, {withCredentials: true})
      .then((response) => {
          this.setState({
            loggedInUser: response.data
          })
      })
      .catch(() => {

      })
  }  
}

handleSignUp = (event) => {
  event.preventDefault()
  let user = {
    fname: event.target.fname.value,
    sname: event.target.sname.value,
    email: event.target.email.value,
    password: event.target.password.value
  } 

  axios.post(`${config.API_URL}/api/Signup`, user)
    .then((response) => {
        this.setState({
          loggedInUser: response.data
        }, () => {
          this.props.history.push('/')
        })
    })
    .catch(() => {
    })
}

handleSubmit = (event) => {
  event.preventDefault()
  
    let carName = event.target.carname.value
    let Tansmission = event.target.transmission.value
    let wheelDrive= event.target.wheeldrive.value
    let Horsepower = event.target.horsepower.value
   let carModel =event.target.carmodel.value
   let insuranced = event.target.insurance.value
    let User = this.state.loggedInUser._id
  let image= event.target.image.files[0]

  let uploadImage= new FormData()
  uploadImage.append('imageUrl', image)
  
  //upload image to the database
axios.post(`${config.API_URL}/api/upload`, uploadImage)
    .then((response) =>{
      axios.post(`${config.API_URL}/api/Sportcar/create`, {
        carName:carName, Tansmission:Tansmission, wheelDrive:wheelDrive, Horsepower:Horsepower,
        carModel:carModel, insuranced:insuranced, User:User, image: response.data.image

      }) 
            .then((response) => {
                this.setState({
                  sportcar: [response.data, ...this.state.sportcar]
                }, () => {

                  this.props.history.push('/')
                })

            })
            .catch(() => {
            })
   })
   .catch(()=>{

   })


}

handleSignIn = (event) => {
  event.preventDefault()
  let user = {
    email: event.target.email.value,
    password: event.target.password.value
  } 

  axios.post(`${config.API_URL}/api/signin`, user, {withCredentials: true})
    .then((response) => {
        this.setState({
          loggedInUser: response.data
        }, () => {
          this.props.history.push('/Profile')
        })
    })
    .catch(() => {
    })
 }

  render() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage}  />
        
            

                <Route path="/Signup"  render ={()=>{
                  return <Signup onSignUp={this.handleSignUp} />
                }}/>

                <Route  path="/signin"  render={(routeProps) => {
              return  <Signin onSignIn={this.handleSignIn} {...routeProps}  />
            }}/>

            { <Route  path="/SportcarDetails/:SportcarId" render={() => {
                return <SportcarDetails   />   }} /> }
            <Route path ="/Profile" render={ ()=> { 
              return <Profile  onSubmit={this.handleSubmit}/>}}/>
           

      </Switch>
    </div>
  );
  }

}
export default withRouter(App);
