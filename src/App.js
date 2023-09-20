import './App.css';
import Landing from './pages/Landing';
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
   <Landing/>
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
