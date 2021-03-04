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

class App extends Component {
  state={
    sportcar:[]
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
    .catch((err) => {
    })
}

handleSubmit = (event) => {
  event.preventDefault()
  let fname = event.target.fname.value
  let sname = event.target.sname.value
  let email = event.target.email.value
  let password= event.target.password.value
  
  axios.post(`${config.API_URL}/api/create`, {
    fname: fname,
    sname: sname,
    email:email,
    password:password,

  })
    .then((response) => {
      
        this.setState({
          sportcar: [response.data, ...this.state.sportcar]
        }, () => {

          this.props.history.push('/')
        })

    })
    .catch((err) => {
      console.log('Create failed', err)
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
          this.props.history.push('/')
        })
    })
    .catch((err) => {
        console.log('Something went wrong', err)
    })
 }

  render() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <NewPost/>
        <Route exact path="/" component={HomePage}  />
        
            {/* <Route  path="/SportcarDetails/:sportcarId" render={() => {
                return <SportcarDetails   />   }} /> */}

                <Route path="/Signup"  render ={()=>{
                  return <Signup onSignUp={this.handleSignUp} />
                }}/>

                <Route  path="/signin"  render={(routeProps) => {
              return  <Signin onSignIn={this.handleSignIn} {...routeProps}  />
            }}/>



      </Switch>
    </div>
  );
  }

}
export default withRouter(App);
