import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './css/ListBooking.css'

function ListBooking() {
  const [booking, setBookings] = useState([]);
  useEffect(() => {
    getBookings();
  }, []);

  function getBookings() {
    axios.get('http://localhost:8005/api/').then(function (response) {
      setBookings(response.data);
    });
  }

  return (
    <div className='box'>
    <div className='table'>
      <h1>Booking List</h1>
      <table>
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Appartment</th>
            <th>Date of Booking</th>
            <th>Time of Booking</th>
          </tr>
        </thead>
        <tbody>
          {booking.map((booking, key) => (
            <tr key={key}>
              <td>{booking.name}</td>
              <td>{booking.appartment}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}


export default ListBooking;