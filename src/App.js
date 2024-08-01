import './App.css';
import Landing2 from './pages/Landing2';
import { getDatabase } from "firebase/database";
import {app} from "./firebase";
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
import Landing from './pages/Landing';
import FirebaseProvider from './Context/Firebase.js'
const router = createBrowserRouter([
  {
    path: '/agency',
    element: (
      <Landing2></Landing2>
    )


  },
  {
    path: '/',
    element: (
      <Landing></Landing>
    )
  },
  {
    path: '/agency',
    element: (
      <Landing></Landing>
    )


  },
  {
    path: '/agency',
    element: (
      <Landing></Landing>
    )
  },
  {
    path: '/registerUser',
    element: (<RegisterUser></RegisterUser>),
  },
  {
    path: '/myAgency',
    element: (<Landing2></Landing2>),
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
// const db = getDatabase(app);
function App() {
  return (
    <FirebaseProvider>
    
    <div className="App">
      <RouterProvider router={router} />

    </div>
    </FirebaseProvider>
  );
}

export default App;
