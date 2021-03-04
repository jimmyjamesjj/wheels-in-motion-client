import React, { Component } from 'react'

 class newPost extends Component {
    render() {
        return (
            <div><div> <h1>Creat sport car post</h1>
            </div>
                <form onSubmit={this.props.onAdd}>
                <div className="form-group">
                <label htmlFor="InputUsername">Car name</label>
                <input type="text" className="form-control" id="InputUsername" name="carname"
                 placeholder="Entre car name" />
            </div>

            <div className="form-group">
                <label htmlFor="InputUsername">Transmisson</label>
                <input type="text" className="form-control" id="InputUsername" name="transmission"
                   placeholder="Entr transmission"/>
            </div>
            <div className="form-group">
                <label htmlFor="InputUsername">Wheel drive</label>
                <input type="text" className="form-control" id="InputUsername" name="wheeldrive"
                 placeholder="Entre car name" />
            </div>
            <div className="form-group">
                <label htmlFor="InputUsername">Horsepower</label>
                <input type="text" className="form-control" id="InputUsername" name="horsepower"
                 placeholder="Entre horsepower" />
            </div>
            <div className="form-group">
                <label htmlFor="InputUsername">Car Model</label>
                <input type="text" className="form-control" id="InputUsername" name="carmodel"
                 placeholder="Enter year" />
            </div>
        <div className="form-group">
                <label htmlFor="InputUsername">Insurance </label>
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