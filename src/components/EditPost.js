import axios from 'axios'
import React, { Component } from 'react'
import config from '../config'
import Landing from '../components/Landing'


export default class EditPost extends Component {

    state = {
        sportcars: {}
    }

  componentDidMount(){
       let sportcarsId = this.props.match.params.sportcarsId

    axios.get(`${config.API_URL}/api/sportcars/${sportcarsId}`)
      .then((response) => {
        this.setState({
          sportcars: response.data
        })
      })
      .catch(() => {
        
      })
  }

  changeImage = (event) => {
        let file = event.target.file[0]
        let cloneSportcar = JSON.parse(JSON.stringify(this.state.sportcars))
        cloneSportcar.image = file

        this.setState({
            sportcars: cloneSportcar
        })
  }

  changeCarName = (event) => {
        let text = event.target.value
        let cloneSportcar = JSON.parse(JSON.stringify(this.state.sportcars))
        cloneSportcar.carName = text

        this.setState({
        sportcars: cloneSportcar
        })
  }

  changeTransmission = (event) => {
        let text = event.target.value
        let cloneSportcar = JSON.parse(JSON.stringify(this.state.sportcars))
        cloneSportcar.Transmission = text

        this.setState({
        sportcars: cloneSportcar
        })
  }
  changeWheelDrive = (event) => {
        let text = event.target.value
        let cloneSportcar = JSON.parse(JSON.stringify(this.state.sportcars))
        cloneSportcar.wheelDrive = text

        this.setState({
        sportcars: cloneSportcar
        })
  }
  changeHorsepower = (event) => {
        let text = event.target.value
        let cloneSportcar = JSON.parse(JSON.stringify(this.state.sportcars))
        cloneSportcar.Horsepower = text

        this.setState({
        sportcars: cloneSportcar
        })
  }

  changeInsurance = (event) => {
        let text = event.target.value
        let cloneSportcar = JSON.parse(JSON.stringify(this.state.sportcars))
        cloneSportcar.insurance = text

        this.setState({
        sportcars: cloneSportcar
        })
  }

  changeCarModel = (event) => {
        let text = event.target.value
        let cloneSportcar = JSON.parse(JSON.stringify(this.state.sportcars))
        cloneSportcar.carModel = text

        this.setState({
        sportcars: cloneSportcar
        })
  }


  render() {
        let inputstyle={
            width:'250px',
            height: '30px',
            backgroundColor:'#f0dde0'
        }
        const {sportcars} = this.state
        const {onEdit} = this.props
        
    return (
        
      <div  > <Landing/>
              <div></div> 


          <h1>edit your sport car post</h1>
           

        <form>
            {/* <input type="file" onChange={this.changeImage} value={sportcar.image}/> */}

            <div className="form-group">
            <label htmlFor="InputUsername">Car name</label>
            <input style= {inputstyle} type="text" onChange={this.changeCarName} value={sportcars.carName}
             className="form-control" id="InputUsername" name="carName"
             placeholder="Entre car name" />  </div>

            <div className="form-group">
            <label htmlFor="InputUsername">Transmisson</label>      
            <input style= {inputstyle} type="text" onChange={this.changeTransmission} value={sportcars.Transmission}
             className="form-control" id="InputUsername" name="Transmission"
             placeholder="Entre transmission"/>  </div>

            <div className="form-group">
            <label htmlFor="InputUsername">Wheel drive</label>
            <input style= {inputstyle} type="text" onChange={this.changeWheelDrive} value={sportcars.wheelDrive}
            className="form-control" id="InputUsername" name="wheelDrive"
             placeholder="Entre car name" />   </div>

            <div className="form-group">
            <label htmlFor="InputUsername">Horsepower</label> 
            <input style= {inputstyle} type="text" onChange={this.changeHorsepower} value={sportcars.Horsepower}
             className="form-control" id="InputUsername" name="Horsepower"
             placeholder="Entre horsepower" />  </div>

            <div className="form-group">
            <label htmlFor="InputUsername">Insured </label>
            <input style= {inputstyle} type="text" onChange={this.changeInsurance} value={sportcars.insurance}
             className="form-control" id="InputUsername" name="insurance" 
             placeholder="Yes or No?"/>   </div>

            <div className="form-group">
            <label htmlFor="InputUsername">Car Model</label>
            <input style= {inputstyle} type="text" onChange={this.changeCarModel} value={sportcars.carModel}
             className="form-control" id="InputUsername" name="carModel"
             placeholder="Enter year" />  </div>


            <button onClick={ () => { onEdit(sportcars) } }  >Submit</button>

    </form>

     </div>
   )
 }

}
