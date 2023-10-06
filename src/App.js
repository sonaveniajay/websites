
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './components/Dashboard';
import Hrdashboard from './component-1/Hrdashboard';
import Login from './component-1/Login';
import Signup from './component-1/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/signup' element={<Signup/>} />
                <Route exact path='/dashboard' element={<Dashboard/>} />
                <Route exact path='/hrdashboard' element={<Hrdashboard/>}/>
            </Routes>
            </BrowserRouter>

        </div>
                
    )
}

export default App
    
