import React, {useState} from 'react';
import { v4 as uuid } from 'uuid'

import Form from './Form'
import TeamMember from './TeamMember'

import './App.css';


const initialTeamMembersList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    // initial form values
    name: 'Somayah',
    email: 'somayah@sa.com',
    role: 'Designer',
  },
]

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}

function App(){
  const [teamMembers, setTeamMembers] = useState(initialTeamMembersList)
  
  // 🔥 STEP 1 - WE NEED STATE TO HOLD ALL VALUES OF THE FORM!
  const [formValues, setFormValues] = useState(initialFormValues) 

  const updateForm = (inputName, inputValue) => { 
    // 🔥 STEP 2 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
    //  It takes in the name of an input and its value, and updates `formValues`
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const teamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    setTeamMembers([...teamMembers, teamMember])
  }  
  

  return(
    <div className='container'>
      <header><h1>Team Builder</h1></header>

      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        teamMembers.map(teamMember=> {
          return (
            <TeamMember key={teamMember.id} details={teamMember} />
          )
        })
      }
    </div>
  )
}

export default App;
