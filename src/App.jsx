import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/DashBoard/EmployeeDashBoard'
import AdminDashboard from './components/DashBoard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx'
import { AuthContext } from './context/AuthProvider.jsx'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState('')
  const [userData,setuserData] = useContext(AuthContext)
  const [sata, setsata] = useState('')
//  const sa =async()=>{
//   let data= await authData
//    setsata(data)
//  }
//  sa()
  useEffect(() => {
    if (userData) {
      console.log("AuthData is available:", userData); // Debug
      setsata(userData);
    } else {
      console.log("AuthData is not yet available.");
    }
    // Debug: Check if authData is available


    // Attempt to retrieve logged-in user from localStorage
    const loggedInUsers = localStorage.getItem('loggedInuser')
    console.log("Retrieved from localStorage:", loggedInUsers) // Debug

    if (loggedInUsers) {
      try {
        const parsedUser = JSON.parse(loggedInUsers)
        console.log("Parsed User:", parsedUser) // Debug
        setUser(parsedUser.role)
        setLoggedInUserData(parsedUser.data)
       
      } catch (error) {
        console.error('Failed to parse user data from localStorage:', error)
      }
    }
  }, [userData]) // dependency on authData to re-run if authData changes

  const handleLogin = (email, password) => {
    if (email === 'sabin@gmail.com' && password === 'password123') {
      // Admin login
      console.log("Admin logged in") // Debug
      setUser('admin')
      localStorage.setItem('loggedInuser', JSON.stringify({ role: 'admin' }))
     
    } else if (userData) {
      // Employee login
      const employee = userData.find(e => e.email === email && e.password === password)
      console.log("Employee found:", employee) // Debug
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        console.log(employee);
        console.log(loggedInUserData);
        
        localStorage.setItem('loggedInuser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        alert('Invalid credentials')
      }
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard data={'admin'} setUser={setUser}/>
      ) : user === 'employee' ? (
        <EmployeeDashBoard data={loggedInUserData} setUser={setUser} />
      ) : null}
    </div>
  )
}

export default App
