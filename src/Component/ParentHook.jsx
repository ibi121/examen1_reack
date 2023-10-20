import React, { useState } from 'react'
import EnfantHooks from './EnfantHooks'

export default function ParentHook(props) {
    const [totalParent, setTotalParent] = useState(0)
    const [totalEnfant, setTotalEnfant] = useState(0)

    const handleChangeParent = () => {
        setTotalParent(totalParent => totalParent + 1)
    }

    const handleChangeParentFromEnfant = () => {
        setTotalParent(totalParent => totalParent + 2)
    }

    const sendDateToChild = () => {


    }

  return (
    <div>
        <EnfantHooks 
        onClick = {() => handleChangeParentFromEnfant()}
        
        />
  
     <button onClick={() => handleChangeParent()}>+1 parent</button>


      <label htmlFor='Parent_somme_enfant'>Parent somme Enfant</label>
      <input type='number' id='parent_somme_enfant' value={totalParent}></input>
      <label htmlFor="Parent_somme_enfant">Parent somme enfant</label>
      <input type='number' id='Parent_somme_enfant' value={totalEnfant}></input>
      <label htmlFor='Parent_somme_total'>Parent somme total</label>
      <input type="number" id='Parent_somme_total' value={totalParent}></input>
    </div>
  )
}
