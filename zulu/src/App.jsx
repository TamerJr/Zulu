import { Route, Routes } from 'react-router-dom'
import { Account, Admin, Blog, BlogPost, Footer, Landing, Navbar, Shop, SignIn, SignUp } from './Utilities'
import { useContext } from 'react'
import userAuth from './Features/Context/AuthUser'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
function App() {
const {user}=useContext(userAuth)
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/blogpost/:id" element={<BlogPost/>}/>
        <Route path="/blog" element={<Blog/>}/>
       {user?.uid==(import.meta.env.VITE_FIRE_BASE_APP_ADMIN) &&<Route path="/admin" element={<Admin/>}/>}
       <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account/>
            </ProtectedRoute>
          }/>
          </Routes>
      {
        user&&
        <Footer/>
      }
    </div>
  )
}

export default App
