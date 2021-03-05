import React, { Component } from 'react'
import NewPost from '../components/NewPost'

class profile extends Component {
    render() {
        return (
            
            <div>
                <NewPost submitPost= {this.props.onSubmit}/>

                <h1>welcome to your profile page</h1>
            </div>
        )
    }
}


export default profile