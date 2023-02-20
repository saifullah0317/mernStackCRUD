import './App.css';
import Header from './Components/Header'
import Users from './Components/Users'
import AddUsers from './Components/AddUsers'
import EditUsers from './Components/EditUsers'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (

    <Router>
      <Header/>
      <Routes>
        <Route path="/users" element={<Users/>}/>
        <Route path="/adduser" element={<AddUsers/>}/>
        <Route path="/edituser/:id" element={<EditUsers/>}/>
      </Routes>
    </Router>
  );
}

export default App;
