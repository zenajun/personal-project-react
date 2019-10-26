import React, {useState} from 'react';

const Form = () => {
  const [username, setUsername] = useState('');

  const handleChange = e => {
    setUsername(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');    
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Github Username:</label>
      <input type="text" id="username" value={username} onChange={handleChange}/>
      <button>Submit</button>
    </form>
  )
}

 export default Form;