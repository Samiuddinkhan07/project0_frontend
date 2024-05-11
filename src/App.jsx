import Homepage from './pages/Homepage/Homepage'
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/Signup';

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="/dashboard" element={<Homepage/>}>
          <Route path="/dashboard/" element={<Dashboard/>}/>
        </Route>
        <Route path="*" element={<h1>Trying to access my life's plans? Sorry, they're still under development. Please check back in a few millennia.</h1>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
