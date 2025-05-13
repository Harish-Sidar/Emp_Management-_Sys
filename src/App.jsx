import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
  const [user, setUser] = useState(null);


  const handleLogin = (email,password) => {
    if(email == 'admin@me.com' && password == '123'){
    setUser('admin');
      console.log('This is admin');
  }else if(email == 'user@me.com' && password == '123'){
    setUser('employee')
    console.log('This is user');
  }
  else{
    alert('Invalid credentials');
  }
}
 
const data = useContext(AuthContext);
console.log(data);

  return (
    <>
      {!user ?<Login handleLogin={handleLogin} />: ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard/>}

    </>
  )
}

export default App
