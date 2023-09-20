import './App.css';
import Landing2 from './pages/Landing2';
import Register from './Auth/RegisterAgency';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './Auth/Login_User';
import Login_Agency from './Auth/Login_Agency';
import RegisterAgency from './Auth/RegisterAgency';
import RegisterUser from './Auth/RegisterUser';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
   <Landing2></Landing2>
    )
  },
  {
    path: '/registerUser',
    element: (<RegisterUser></RegisterUser>),
  },
  {
    path: '/loginUser',
    element: (<Login></Login>),
  },
  {
    path: '/registerAgency',
    element: (<RegisterAgency></RegisterAgency>),
  },
  {
    path: '/loginAgency',
    element: (<Login_Agency></Login_Agency>),
  },
 
]);

function App() {
  return (
   <div className="App">
      
     <RouterProvider router={router} />
     
    </div>
  );
}

export default App;
