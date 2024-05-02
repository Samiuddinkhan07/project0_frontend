import Homepage from './pages/Homepage/Homepage'
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './pages/Login/Login';

function App() {


  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/dashboard" element={<Homepage/>}>
          <Route path="/dashboard/" element={<Dashboard/>}/>
        </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
