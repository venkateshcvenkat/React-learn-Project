import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import { Link, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import { useState } from 'react';

function App() {
  const [cartItems,setCartItems] = useState([])
  const [userName,setUserName]= useState("Guest")
  return (
    <div className="App">
      <header>
        <div id='User_Profile'>
          <table>
            <tr>
              <td><img src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Users-Guest-icon.png" alt="" id='User_ProfileStyle' /></td>
              <td><h3>{userName}</h3></td>
            </tr>
          </table>
        </div>
      <div id='Nav_Files'>
        <table>
          <tbody>
            <tr>
                <td><b><Link to="/"className='Nav_link'>Home</Link></b></td>
                <td><b><Link to="/About"className='Nav_link'>About</Link></b></td>
                <td><b><Link to="/Contact"className='Nav_link'>Login</Link></b></td>
                <td><b><Link to="/Cart"className='Nav_link'>Cart</Link></b></td>
            </tr>
          </tbody>
        </table>
      </div>
      </header>
      <Routes>
        <Route path ='/' element={<Main setCartItems ={setCartItems}/>}></Route>
        {/* <Route path ='/home' element={<Main/>}></Route> */}
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact setName={setUserName}/>}/>
        <Route path='/Cart' element={<Cart mycart ={cartItems}/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
