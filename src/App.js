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
import EditPost from "./components/EditPost";
import Requestcar from './components/Requestcar'

class App extends Component {
  state={
    sportcars:[],
    loggedInUser: null,
    error: null,
    requestcar:[],
}
componentDidMount(){
  axios.get(`${config.API_URL}/api/sportcars`)
    .then((response) => {
      this.setState({ sportcars: response.data})
    })
    .catch(() => {
  
    })

  if (!this.state.loggedInUser) {
    axios.get(`${config.API_URL}/api/user`, {withCredentials: true})
      .then((response) => {
        console.log(response.data)
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

  axios.post(`${config.API_URL}/api/Signup`, user, {withCredentials: true})
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
  
    let carName = event.target.carName.value
    let Transmission = event.target.Transmission.value
    let wheelDrive= event.target.wheelDrive.value
    let Horsepower = event.target.Horsepower.value
   let carModel =event.target.carModel.value
   let insurance = event.target.insurance.value
    let User = this.state.loggedInUser._id
  let image= event.target.image.files[0]

  let uploadImage= new FormData()
  uploadImage.append('imageUrl', image)
  
  //upload image to the database
axios.post(`${config.API_URL}/api/upload`, uploadImage)
    .then((response) =>{
      axios.post(`${config.API_URL}/api/sportcars/create`, {
        carName:carName, Transmission:Transmission, wheelDrive:wheelDrive, Horsepower:Horsepower,
        carModel:carModel, insurance:insurance, User:User, image: response.data.image

      }, {withCredentials: true}) 
            .then((response) => {
                this.setState({
                  sportcars: [response.data, ...this.state.sportcars]
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

handleRquestCarSubmit=((event)=>{
        event.preventDefault()
        let date = event.target.date.value
        let address= event.target.address.value

        let User = this.state.loggedInUser._id
        // let Sportcar= target.Sportcar._id

      axios.post(`${config.API_URL}/api/requestcar/create`,{
        date:date, address:address, User:User
      }, {withCredentials: true})
      .then((response) => {
        this.setState({
          requestcar: [response.data, ...this.state.requestcar]
        }, () => {

          this.props.history.push('/')
        })

      })
      .catch(() => {
      })


})

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
    .catch((err) => {
      console.log('Something went wrong', err)
    })
 }
// logout function 
handleLogout = () => {
  
  axios.post(`${config.API_URL}/api/logout`, {}, {withCredentials: true})
  .then(() => {
      this.setState({
        loggedInUser: null
      }, () => {
        this.props.history.push('/')
      })
  })

 }
 handleEditSportcar =(sportcars)=>{
  axios.patch(`${config.API_URL}/api/sportcars/${sportcars._id}`, {
    carName: sportcars.carName, Transmission: sportcars.Transmission, wheelDrive: sportcars.wheelDrive, 
    Horsepower: sportcars.Horsepower, carModel: sportcars.carModel, insurance: sportcars.insurance, 
    User: sportcars.User
  }, {withCredentials: true})
    .then(() => {
        let newsportcar = this.state.sportcar.map((singlesportcar) => {
            if (sportcars._id === singlesportcar._id) {
              singlesportcar.carName  = sportcars.carName
              singlesportcar.Transmission =sportcars.Transmission
              singlesportcar.wheelDrive = sportcars.wheelDrive
              singlesportcar.Horsepower = sportcars.Horsepower
              singlesportcar.carModel = sportcars.carModel
              singlesportcar.insurance = sportcars.insurance
              singlesportcar.User = sportcars.User
            }
            return singlesportcar
        })
        this.setState({
          sportcars: newsportcar
        }, () => {
          this.props.history.push('/')
        })

        
    })
    .catch(() => {

    })
 }

 handleDelete = (sportcarsId) => {

    axios.delete(`${config.API_URL}/api/sportcars/${sportcarsId}`)
      .then(() => {
          let filteredsportcar = this.state.sportcars.filter((sportcars) => {
            return sportcars._id !== sportcarsId
          })

          this.setState({
            sportcars: filteredsportcar
          }, () => {
            this.props.history.push('/')
          })
      })
      .catch((err) => {
        console.log('Delete failed', err)
      })

 }

  render() {
    const {sportcars, loggedInUser, error} = this.state

  return (
    <div className="App">
      
      <Switch>
        <Route  exact path="/" render = {()=>{ 
          return <HomePage sportcars={sportcars}/>
        }}   />
                <Route  path="/signin"  render={(routeProps) => {
              return  <Signin onSignIn={this.handleSignIn} {...routeProps}  />
            }}/>

            <Route  path="/Signup"  render={(routeProps) => {
                          return  <Signup onSignUp={this.handleSignUp} {...routeProps}  />
                        }}/>

            { <Route  path="/SportcarDetails/:sportcarsId" render={(routeProps) => {
                return <SportcarDetails user={loggedInUser} {...routeProps}  />   }} /> }

            <Route path ="/Profile" render={ (routeProps)=> { 
              return <Profile sportcars={this.state.sportcars} onLogout={this.handleLogout}
               user={loggedInUser} onSubmit={this.handleSubmit}  onDelete={this.handleDelete} {...routeProps}/>}}/>

            <Route path="/sportcars/:sportcarsId/edit" render = {(routeProps)=>{
              return <EditPost onEdit={this.handleEditSportcar} {...routeProps}/>
            }}/>

            <Route path="/NewPost" render={ (routeProps)=>{ return <NewPost 
            onSubmit={this.handleSubmit} {...routeProps} /> }}/>
           
           <Route path="/Requestcar" render={ (routeProps)=>{ return <Requestcar onSubmit={this.handleRquestCarSubmit}
            {...routeProps}/>}}/>

      </Switch>
    </div>
  );
  }

}
export default withRouter(App);
