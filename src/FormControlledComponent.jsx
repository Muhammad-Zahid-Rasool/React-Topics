import React, { useState } from 'react'


export default function FormControlledComponent() {
  
    const [name ] = useState('');
   
    return (
    <div>
    <h4>Form Controled Component Exaample</h4>
    <form>
     <label >Name:</label> <input type="text" value={name} /><br/>

    
    </form>    
    </div>
  )
}
