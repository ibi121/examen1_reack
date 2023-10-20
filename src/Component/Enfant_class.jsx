import React, { Component } from 'react'

export default class Enfant_class extends Component {

    constructor(props){
        super()
        this.state={
            total: 0,
            totalEnfantParent: 0,
            EnfantParent: props.addChild
            }
    
    }

    handleSommeParent = (nouvelle_valeur)=> {
        this.setState({
            totalEnfantParent : this.state.total + 1        
          
          })
    }

    handleTotalEnfant = (number) => {
        this.setState({
            total: this.state.total + number
        })
        this.props.recieveFromChild(2)
    }

    

    
  render() {
    return (
      <div>
        <button onClick={() => this.handleTotalEnfant(2)}>+2 enfant</button>
        <label htmlFor='enfant_somme_parent'>Enfant somme parent</label>
        <input type='number' id='enfant_somme_parent' value={this.state.totalEnfantParent}></input>
        <label htmlFor="Enfant_somme_enfant">Enfant somme enfant</label>
        <input type='number' id='Enfant_somme_enfant' value={this.state.total}></input>
        <label htmlFor='enfant_somme_total'>Enfant somme total</label>
        <input type="number" id='enfant_somme_total' value={this.state.EnfantParent}></input>
      </div>
    )
  }
}
