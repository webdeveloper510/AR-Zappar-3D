import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <div className='first'>
     <Routing/>
     <ToastContainer autoclose={1000}/>
    </div>
    

  )
}

export default App;
