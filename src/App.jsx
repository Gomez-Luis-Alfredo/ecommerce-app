import './App.css'
import { Home } from './components/Home'
import { NavBar } from './components/NavBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Products } from './components/Products'
import { Product } from './components/Product'


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
