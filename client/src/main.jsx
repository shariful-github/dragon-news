import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main.jsx';
import Category from './components/Category.jsx';
import NewsLayout from './layouts/NewsLayout.jsx';
import News from './components/News.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Login from './layouts/Login.jsx';
import Register from './layouts/Register.jsx';
import Test from './components/Test.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx';
import TermsAndConditions from './layouts/TermsAndConditions.jsx';
import About from './layouts/About.jsx';
import Career from './layouts/Career.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Category></Category>,
        loader: () => fetch('http://localhost:5000/news'),
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/news',
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ':id',
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  },
  {
    path: '/terms', 
    element: <TermsAndConditions></TermsAndConditions>,
  },
  {
    path: '/about', 
    element: <About></About>
  },
  {
    path: '/career', 
    element: <Career></Career>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
