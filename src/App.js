import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ListBooking from './components/ListBooking';
import CreateBooking from './components/CreateBooking';


function App() {
  return (
    <div className="App">
     <h1> Laundry booking app</h1>
     <BrowserRouter>
     <nav>
      <ul>
        <li>
          <h2><Link to="/">List Users</Link></h2>
        </li>
        <li>
          <h2><Link to="user/create">Create Users</Link></h2>
        </li>
      </ul>
     </nav>
     <Routes>
      <Route index element={<ListBooking/>}></Route>
      <Route index  path="user/create" element={<CreateBooking/>}></Route>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
