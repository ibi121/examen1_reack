import React, { Component } from 'react'
import Enfant_class from './Enfant_class'

export default class Parent_class extends Component {
    constructor(props){
        super()
        this.state = {
            sommeEnfant: 0,
            total: 0,
            sendToEnfant: 0
        }
    }

    handleEnfant = () => {
      this.setState({
        total: this.state.total + 2,
        sommeEnfant: this.state.sommeEnfant + 2
      })
    }

    handlTotalParent = () => {
      this.setState({
        total: this.state.total + 1,
        sendToEnfant: this.state.sendToEnfant + 1
      })
    }

   



    
  render() {
    return (
    <div>
      <Enfant_class 
      addChild={()  => this.state.sendToEnfant}
      recieveFromChild={this.handleEnfant}
      />
       <button onClick={() => this.handlTotalParent(1)}>+1 parent</button>
        <label htmlFor='Parent_somme_enfant'>Parent somme Enfant</label>
        <input type='number' id='parent_somme_enfant' value={this.state.total}></input>
        <label htmlFor="Parent_somme_enfant">Parent somme enfant</label>
        <input type='number' id='Parent_somme_enfant' value={this.state.sommeEnfant}></input>
        <label htmlFor='Parent_somme_total'>Parent somme total</label>
        <input type="number" id='Parent_somme_total' value={this.state.total}></input>
      </div>

)
  }
}
