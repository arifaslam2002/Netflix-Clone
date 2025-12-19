import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import SignIn from './Components/SignIn/SignIn'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext'
import ProtectedRoute from './routes/ProtectedRoute'
import PublicRoute from './routes/PublicRoute'
import { MovieProvider } from './Context/MovieContext'
import { ThemeProvider } from './Context/ThemeContext'
const App = () => {
  return (
<ThemeProvider>
   <AuthProvider>
   <MovieProvider>
     <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
          <Search/>
          </ProtectedRoute>} />
        <Route path="/signin" element={<PublicRoute>
          <SignIn />
        </PublicRoute>} />
      </Routes>
    </BrowserRouter>
   </MovieProvider>
 </AuthProvider>
</ThemeProvider>
  )
}

export default App
