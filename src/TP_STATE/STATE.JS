import React, { Component } from 'react'

export default class STATE extends Component {
    constructor(props){
super(props)
this.state={nom:'ahmadi',prenom:'aicha'}
}
f1(){
    return(this.setState={nom:this.props.nom,prenom:this.props.prenom})
    }
  render() {
          return (
      <div>
        
      </div>
    )
  }
}
