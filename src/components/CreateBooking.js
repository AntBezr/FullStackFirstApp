import React from 'react';
import "../App.css"
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/CreateBooking.css'

const CreateBooking = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

const handleChange = (event) =>{
  const name= event.target.name;
  const value= event.target.value;
  setInputs((values) =>({...values,[name]:value}))
}

  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:8005/api/',inputs)
    console.log(inputs);
    navigate('/')
  };

  return (
    <div>
      <h2>Create users</h2>
      <form onSubmit={handleSubmit}>
        <label >Name:</label>
        <input type="text" name="name" onChange={handleChange}/>
        <br/>
        <label >Appartment:</label>
        <input type="number" name="appartment" onChange={handleChange}/>
        <br/>
        <label >Date:</label>
        <input type="date" min="2023-05-01" name="date" onChange={handleChange}/>
        <br/>
        <label htmlFor='time'>Time:</label>
        <select name='time' id='time' defaultValue={'none'}  onChange={handleChange}>
          <option disabled value={'none'} >Select time..</option>
          <option value={'8:00'}>8:00</option>
          <option value={'10:00'}>10:00</option>
          <option value={'12:00'}>12:00</option>
          <option value={'14:00'}>14:00</option>
          <option value={'16:00'}>16:00</option>
          <option value={'18:00'}>18:00</option>
        </select>
     
        
        <br/>
        <button >Save</button>
      
      </form>
    </div>
  );
};


export default CreateBooking;