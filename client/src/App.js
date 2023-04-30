import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** Import all components here */
import Username from './components/Username';
import Password from './components/Password';
import Recovery  from './components/Recovery';
import Profile from './components/Profile';
import Register from './components/Register';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';




/** root Routes */

const router = createBrowserRouter([
  {
    path: '/',
    element : <Username></Username>
  },

  {
    path: '/register',
    element : <Register></Register>
  },

   {
    path: '/Password',
    element : <Password></Password>
  },

    {
    path: '*',
    element : <PageNotFound></PageNotFound>
  },

    {
    path: '/Recovery',
    element : <Recovery></Recovery>
  },

    {
    path: '/Profile',
    element : <Profile></Profile>
  },

    {
    path: '/Reset',
    element : <Reset></Reset>
  },

  
])

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
