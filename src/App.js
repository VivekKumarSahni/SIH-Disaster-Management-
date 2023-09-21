import './App.css';
import Landing2 from './pages/Landing2';
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
import LandingPage from './pages/LandingPage';
import Landing2Page from './pages/Landing2Page';
import { signOut } from './Auth/authAPI';



const router = createBrowserRouter([
  {
    path: '/',
    element: (
       <LandingPage></LandingPage>
    )
  },
  {
    path: '/registerUser',
    element: (<RegisterUser></RegisterUser>),
  },
  {
    path: '/myAgency',
    element: (<Landing2Page></Landing2Page>),
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
  {
    path: '/signout',
    element: (<signOut></signOut>),
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
