import React, { Component } from 'react'

 class newPost extends Component {
    render() {
        return (
            <div><div> <h1>Creat sport car post</h1>
            </div>
                <form  onSubmit={this.props.submitPost}>

                <input name="image" type="file" />

                <div className="form-group">
                <label htmlFor="InputUsername">Car name</label>
                <input type="text" className="form-control" id="InputUsername" name="carName"
                 placeholder="Entre car name" />
            </div>

            <div className="form-group">
                <label htmlFor="InputUsername">Transmisson</label>
                <input type="text" className="form-control" id="InputUsername" name="Transmission"
                   placeholder="Entre transmission"/>
            </div>
            <div className="form-group">
                <label htmlFor="InputUsername">Wheel drive</label>
                <input type="text" className="form-control" id="InputUsername" name="wheelDrive"
                 placeholder="Entre car name" />
            </div>
            <div className="form-group">
                <label htmlFor="InputUsername">Horsepower</label>
                <input type="text" className="form-control" id="InputUsername" name="Horsepower"
                 placeholder="Entre horsepower" />
             </div>
             <div className="form-group">
                <label htmlFor="InputUsername">Car Model</label>
                <input type="text" className="form-control" id="InputUsername" name="carModel"
                 placeholder="Enter year" />
            </div>
             <div className="form-group">
                <label htmlFor="InputUsername">Insured </label>
                <input type="text" className="form-control" id="InputUsername" name="insurance" 
                 placeholder="Yes or No?"/>
            </div>

        <button type="submit" className="button is-primary">Post</button>

      </form>
            </div>
        )
    }
}


export default newPost