import { useContext, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { contextObject } from './components/ContextStore/ContextApi';

function App() {
  const ctx=useContext(contextObject);

  return (
    <div className='first'>
      {ctx.loader && <Loader /> }
     <Routing/>
     <ToastContainer autoclose={1000}/>
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













// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||








  // const images = [
  //   {
  //     id: 1,
  //     svg: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="18"
  //         height="20"
  //         viewBox="0 0 18 20"
  //       >
  //         <path
  //           fill="#344B60"
  //           fillRule="nonzero"
  //           d="M19.735 10.065a.557.557 0 01.52 0l8.43 4.477a.518.518 0 01.234.19c.054.08.08.169.081.257V25c0 .18-.103.347-.27.435l-8.47 4.5a.557.557 0 01-.52 0l-8.47-4.5A.496.496 0 0111 25l.013-9.896a.463.463 0 01.068-.371.525.525 0 01.292-.21zm-7.721 5.791L12 24.746l7.5 3.988.002-8.519-7.488-4.359zM28 15.847l-7.498 4.356-.002 8.531 7.5-3.988v-8.899zM19.996 11l-7.476 3.988 7.472 4.349 7.492-4.353L19.996 11z"
  //           transform="translate(-11 -10)"
  //         ></path>
  //       </svg>
  //     ),
  //     name: '3D1',
  //   },
  //   {
  //     id: 1,
  //     svg: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="18"
  //         height="20"
  //         viewBox="0 0 18 20"
  //       >
  //         <path
  //           fill="#344B60"
  //           fillRule="nonzero"
  //           d="M19.735 10.065a.557.557 0 01.52 0l8.43 4.477a.518.518 0 01.234.19c.054.08.08.169.081.257V25c0 .18-.103.347-.27.435l-8.47 4.5a.557.557 0 01-.52 0l-8.47-4.5A.496.496 0 0111 25l.013-9.896a.463.463 0 01.068-.371.525.525 0 01.292-.21zm-7.721 5.791L12 24.746l7.5 3.988.002-8.519-7.488-4.359zM28 15.847l-7.498 4.356-.002 8.531 7.5-3.988v-8.899zM19.996 11l-7.476 3.988 7.472 4.349 7.492-4.353L19.996 11z"
  //           transform="translate(-11 -10)"
  //         ></path>
  //       </svg>
  //     ),
  //     name: '3D2',
  //   },
  //   {
  //     id: 1,
  //     svg: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="18"
  //         height="20"
  //         viewBox="0 0 18 20"
  //       >
  //         <path
  //           fill="#344B60"
  //           fillRule="nonzero"
  //           d="M19.735 10.065a.557.557 0 01.52 0l8.43 4.477a.518.518 0 01.234.19c.054.08.08.169.081.257V25c0 .18-.103.347-.27.435l-8.47 4.5a.557.557 0 01-.52 0l-8.47-4.5A.496.496 0 0111 25l.013-9.896a.463.463 0 01.068-.371.525.525 0 01.292-.21zm-7.721 5.791L12 24.746l7.5 3.988.002-8.519-7.488-4.359zM28 15.847l-7.498 4.356-.002 8.531 7.5-3.988v-8.899zM19.996 11l-7.476 3.988 7.472 4.349 7.492-4.353L19.996 11z"
  //           transform="translate(-11 -10)"
  //         ></path>
  //       </svg>
  //     ),
  //     name: '3D3',
  //   },
  //   {
  //     id: 1,
  //     svg: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="18"
  //         height="20"
  //         viewBox="0 0 18 20"
  //       >
  //         <path
  //           fill="#344B60"
  //           fillRule="nonzero"
  //           d="M19.735 10.065a.557.557 0 01.52 0l8.43 4.477a.518.518 0 01.234.19c.054.08.08.169.081.257V25c0 .18-.103.347-.27.435l-8.47 4.5a.557.557 0 01-.52 0l-8.47-4.5A.496.496 0 0111 25l.013-9.896a.463.463 0 01.068-.371.525.525 0 01.292-.21zm-7.721 5.791L12 24.746l7.5 3.988.002-8.519-7.488-4.359zM28 15.847l-7.498 4.356-.002 8.531 7.5-3.988v-8.899zM19.996 11l-7.476 3.988 7.472 4.349 7.492-4.353L19.996 11z"
  //           transform="translate(-11 -10)"
  //         ></path>
  //       </svg>
  //     ),
  //     name: '3D4',
  //   },
  //   {
  //     id: 1,
  //     svg: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="18"
  //         height="20"
  //         viewBox="0 0 18 20"
  //       >
  //         <path
  //           fill="#344B60"
  //           fillRule="nonzero"
  //           d="M19.735 10.065a.557.557 0 01.52 0l8.43 4.477a.518.518 0 01.234.19c.054.08.08.169.081.257V25c0 .18-.103.347-.27.435l-8.47 4.5a.557.557 0 01-.52 0l-8.47-4.5A.496.496 0 0111 25l.013-9.896a.463.463 0 01.068-.371.525.525 0 01.292-.21zm-7.721 5.791L12 24.746l7.5 3.988.002-8.519-7.488-4.359zM28 15.847l-7.498 4.356-.002 8.531 7.5-3.988v-8.899zM19.996 11l-7.476 3.988 7.472 4.349 7.492-4.353L19.996 11z"
  //           transform="translate(-11 -10)"
  //         ></path>
  //       </svg>
  //     ),
  //     name: '3D5',
  //   },
  //   {
  //     id: 1,
  //     svg: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="18"
  //         height="20"
  //         viewBox="0 0 18 20"
  //       >
  //         <path
  //           fill="#344B60"
  //           fillRule="nonzero"
  //           d="M19.735 10.065a.557.557 0 01.52 0l8.43 4.477a.518.518 0 01.234.19c.054.08.08.169.081.257V25c0 .18-.103.347-.27.435l-8.47 4.5a.557.557 0 01-.52 0l-8.47-4.5A.496.496 0 0111 25l.013-9.896a.463.463 0 01.068-.371.525.525 0 01.292-.21zm-7.721 5.791L12 24.746l7.5 3.988.002-8.519-7.488-4.359zM28 15.847l-7.498 4.356-.002 8.531 7.5-3.988v-8.899zM19.996 11l-7.476 3.988 7.472 4.349 7.492-4.353L19.996 11z"
  //           transform="translate(-11 -10)"
  //         ></path>
  //       </svg>
  //     ),
  //     name: '3D6',
  //   },
  // ];

  
    // <div style={{ width: '60px' }}>
    //   {images.map((image) => (
    //     <div key={image.id} className="threeD" style={{ marginBottom: '10px', textAlign: 'center' }}>
    //       {image.svg}
    //       <a href="#tab3" className="nav-link p-0 m-0 fw-bold link-dark">
    //         {image.name}
    //       </a>
    //     </div>
    //   ))}
    // </div>
 

