import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Product List page</h1>}></Route>
        <Route path="/add" element={<h1>Add Product page</h1>}></Route>
        <Route path="/update" element={<h1>Update Product page</h1>}></Route>
        <Route path="/profile" element={<h1>Profile page</h1>}></Route>
        <Route path="/logout" element={<h1>Logout page</h1>}></Route>

      </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
