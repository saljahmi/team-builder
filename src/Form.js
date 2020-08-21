import React from 'react'

export default function Form(props) {
  const { values, update, submit } = props

  const onChange = evt => {
    // 🔥 STEP 5 - IMPLEMENT the change handler for our inputs and dropdown
    // a) pull the name of the input from the event object
    // b) pull the value of the input from the event object
    const {name, value } = evt.target
    // c) use the `update` callback coming in through props
    update(name, value)
  }

  const onSubmit = evt => {
    // 🔥 STEP 6 - IMPLEMENT the submit handler and attach it to the JSX
    // a) don't allow the browser to reload!
    evt.preventDefault()
    // c) use the `submit` callback coming in through props
    submit()
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Team Member</h2>
        {/* disabled true if any form value trimmed is empty string */}
        <button disabled={!values.name || !values.email || !values.role ? true : false}>submit</button>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Name:&nbsp;
          {/* 🔥 STEP 7 - Make an input of type `text` for username.
            Controlled inputs need `value` and `onChange` props.
            Inputs render what they're told - their current value comes from app state.
            At each keystroke, a change handler fires to change app state. */}
          <input
            value={values.name}
            onChange={onChange}
            name='name'
            placeholder='type name'
            maxLength='30'
            type="text"
          />
        </label>

        <label>Email:&nbsp;
          {/* 🔥 STEP 8 - Make an input of type `email` or `text` for email. */}
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            placeholder='type email'
            maxLength='30'
            type='email'
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Role:&nbsp;
          {/* 🔥 STEP 9 - Make dropdown for role. Dropdowns look very different
            but they can often use the same change handler text inputs use */}
          <select onChange={onChange} value={values.role} name="role">
            <option value="">-- Select a Role --</option>
            <option value="student">Student</option>
            <option value="frontend">Front End Developer</option>
            <option value="backend">Back End Developer</option>
            <option value="designer">Designer</option>
          </select>
        </label>
      </div>
    </form>
  )
}