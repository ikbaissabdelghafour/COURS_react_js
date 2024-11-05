import React, { Component } from 'react'

export default class Increment extends Component {
    constructor(){
        super()
        this.state={compteur:{nbcomp:0,nbincrement:0,nbdecrement:0,nbmaz:0,nbope:0} , nature_operation:"AUCUN"}
    }
    Increment=()=>this.setState({compteur:{
        nbcomp:++this.state.compteur.nbcomp,
        nbincrement:++this.state.compteur.nbincrement,
        nbdecrement:this.state.compteur.nbdecrement,
        nbmaz:this.state.compteur.nbmaz,
        nbope:this.state.compteur.nbope,
    },        nature_operation:"Increment"

})
        decrement=()=>this.state.compteur.nbcomp>0 && this.setState({compteur:{
            nbcomp:--this.state.compteur.nbcomp,
            nbincrement:this.state.compteur.nbincrement,
            nbdecrement:this.state.compteur.nbdecrement+1  ,
            nbmaz:this.state.compteur.nbmaz,
            nbope:this.state.compteur.nbope
        },            nature_operation:"decrement"
    })
    MAZ(){ return (this.setState({compteur:{
        nbcomp:0,
        nbincrement:this.state.compteur.nbincrement,
        nbdecrement:this.state.compteur.nbdecrement,
        nbmaz:this.state.compteur.nbmaz+1,
        nbope:this.state.compteur.nbope+1,
    },        nature_operation:"Maz"

}) )}
  render() {
    return (
        <center>
      <div>
        <h1>le type d'operation : {this.state.nature_operation} </h1>
        <button onClick={this.Increment}>+</button> 
        <button onClick={this.decrement}>-</button><br/>
        <button onClick={()=>this.MAZ()}>START A zero</button>
        <h2> Compteur   : {this.state.compteur.nbcomp}</h2>
        <h2> Compteur inc : {this.state.compteur.nbincrement}</h2>
        <h2> Compteur dec : {this.state.compteur.nbdecrement}</h2>
        <h2> Compteur ope : {this.state.compteur.nbope}</h2>
        <h2> Compteur  maz: {this.state.compteur.nbmaz}</h2>
      </div>
        </center>
    )
  }
}
