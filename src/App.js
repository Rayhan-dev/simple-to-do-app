import './App.css';
import Login from './Pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Signup from './Pages/Signup';
import auth from './firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
 
  return (
    <div >

      <Routes>
        <Route path="/" element={
          // <RequireAuth>
          <HomePage></HomePage>
        // </RequireAuth>
      } />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
      </Routes>
    </div>
  );
}

export default App;
