import './App.css'
import { Home } from './components/Home'
import { NavBar } from './components/NavBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Products } from './components/Products'
import { Product } from './components/Product'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'




const router = createBrowserRouter ([
  {

  element:<NavBar/>,
  children:[
    {

      path: '/',
      element:<Home/>,
    },
    {

      path: '/products',
      element:<Products/>,
    },
    {

      path: '/about',
      element:<About/>,
    },
    {

      path: '/contact',
      element:<Contact/>,
    },
    {

      path: '/login',
      element:<Login/>,
    },
    
    {

      path: '/products/:id',
      element:<Product/>,
    }
    

  ]
}


])

function App() {
  

  return (
    <>
  
    <RouterProvider router={router} />
    
    
    
      
    </>
  )
}

export default App
