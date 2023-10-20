import { useState } from "react"
import React from 'react'

export default function EnfantHooks(props) {
    const [totalParent, setTotalParent] = useState(props.recieveFromPrent)
    const [totalEnfant, setTotalEnfant] = useState(0)

   const  handleChangeEnfant = () => {
        setTotalEnfant(totalEnfant => totalEnfant + 2)
        
        
    }

    const handleChangeEnfantFromParent = () => {
        setTotalEnfant(totalEnfant => totalEnfant + 1)
    }






  return (

        <div>
        <button onClick={() => handleChangeEnfant()}>+2 enfant</button>
        <label htmlFor='enfant_somme_parent'>Enfant somme parent</label>
        <input type='number' id='enfant_somme_parent' value={totalParent}></input>
        <label htmlFor="Enfant_somme_enfant">Enfant somme enfant</label>
        <input type='number' id='Enfant_somme_enfant' value={totalEnfant}></input>
        <label htmlFor='enfant_somme_total'>Enfant somme total</label>
        <input type="number" id='enfant_somme_total' value={totalEnfant}></input>
      </div>
  )
}
