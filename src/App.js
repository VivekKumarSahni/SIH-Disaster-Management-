import './App.css';
import Landing from './pages/Landing';
import Register from './components/Auth/Register';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
   <Landing/>
    )
  },
  {
    path: '/register',
    element: (<Register></Register>),
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
