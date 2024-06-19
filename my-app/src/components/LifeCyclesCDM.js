import React, { Component } from 'react'

export class LifeCyclesCDM extends Component {
    constructor(props) {
        console.log('constructor called')
        super(props)

        this.state = {
            data: 'loading',
        }
    }
    getData() {
        console.log('getData is called')
        setTimeout(() => {
            console.log('data fetched')
            this.setState({
                data: 'loaded',
            })
        }, 3000)
    }
    componentDidMount() {
        console.log('component did mount')
        this.getData()
    }
  render() {
    console.log('render method called')
    return (
      <div>{this.state.data}</div>
    )
  }
}

export default LifeCyclesCDM