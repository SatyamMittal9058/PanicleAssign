import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import reportWebVitals from './reportWebVitals';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import EmployeeCard from './components/EmployeeCard';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
            <Header/>
            <Outlet/>
            </>  
        ),
      children: [
            {
                path:"/",
                element:<Dashboard/>
            },
            {
                path: "emplist",
                element: <EmployeeList />
            },
            {
                path: "empform",
                element: <EmployeeForm />
            },
            {
                path: "empcard",
                element: <EmployeeCard />
            }
        ]
    }
])
root.render(
    <>
        <RouterProvider router={appRouter} />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
