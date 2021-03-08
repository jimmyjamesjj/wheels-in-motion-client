import React, { Component } from 'react'

class requestcar extends Component {
    render() {
        return (
            <div>

                <h1>Request to hire this sport car</h1>
                <form  onSubmit={this.props.onSubmit}>
                <div><input type="hidden"  name="User" ></input></div>
                <div className="form-group">
                <label htmlFor="InputUsername">date</label>
                <input type="text" className="form-control" id="InputUsername" name="date"
                 placeholder="Select date"/> </div>

               <div className="form-group">
                <label htmlFor="InputUsername">Address</label>
                <input type="text" className="form-control" id="InputUsername" name="address"
                   placeholder="Enter your address"/> </div>

            <button type="submit" className="button is-primary">Send Request</button>
                </form>
            </div>
        )
    }
}


export default requestcar