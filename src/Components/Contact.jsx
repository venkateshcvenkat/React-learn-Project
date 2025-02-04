import React from 'react'
import './Contact.css'
function Contact({setName}) {
  const addName = (event)=>{
    event.preventDefault();
    let name = event.target.uname.value;
    setName(name);
  }
  return (
    <div>
      
      <div id='User_Form'>
      <h1>User Login Form</h1>
        <form onSubmit={addName}>
          <table>
           <tr>
           <td><h3>User Name</h3></td>
           <td> <input type="text" name = 'uname' placeholder='Enter User name here' /> </td>
           </tr>
           <tr>
            <td><h3>User Number</h3></td>
            <td><input type="number" name='unumber'placeholder='Enter User number here' /></td>
           </tr>
           <tr>
            <td><h3>User Email</h3></td>
            <td><input type="email" name='uemail'placeholder='Enter User mail here' /></td>
           </tr>
           <tr>
            <td><input type="submit" id='Form_Button' /></td>
           </tr>
          </table>
        </form>
      </div>
    </div>
  )
}

export default Contact

