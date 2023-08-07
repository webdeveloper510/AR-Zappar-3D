import { useContext, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { contextObject } from './components/ContextStore/ContextApi';
import WelcomePage from './components/welcome/WelcomePage';

function App() {
  const ctx=useContext(contextObject);

  return (
    <div className='first'>
      {ctx.loader && <Loader /> }
     <Routing/>
     <ToastContainer 
      //  autoclose={500}
     />
    </div>
  
  )
}

export default App;


const Loader = () => {
  return (
    <div className='loader-overlay'>
      <div className='loader'></div>
    </div>
  );
};
