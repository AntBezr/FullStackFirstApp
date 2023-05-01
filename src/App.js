import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ListBooking from './components/ListBooking';
import CreateBooking from './components/CreateBooking';


function App() {
  return (
    <div className="App">
     <h5> full stack app</h5>
     <BrowserRouter>
     <nav>
      <ul>
        <li>
          <Link to="/">List Users</Link>
        </li>
        <li>
          <Link to="user/create">Create Users</Link>
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
