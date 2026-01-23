
// import './App.css'
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './containers/UI/Header';
import MainLayout from './containers/UI/Layout/Main';
import Products from './components/Products';
import ProductDetails from './components/Products/Details';
import ProductLayout from './containers/UI/Layout/ProductLayout';
import ProtectedRoute from './containers/UI/Layout/ProtectedRoute';
import PublicRoute from './containers/UI/Layout/PublicRoute';
import NotFoundPage from './containers/UI/Error/NotFoundPage';
import UserProfile from './components/UserProfile';
import CartPage from './components/Carts';
// Navigate, Outlet

// redux => token = null
function App() {
{/* nested routes, protected routes */}

  return (
    <div> 
      <Routes>
        <Route element={<MainLayout />}>

          <Route path="/" element={<HomePage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/products" element={<ProductLayout />}>
              <Route index element={<Products />} />
              <Route path=":id" element={<ProductDetails />} />
            </Route>
            <Route path='/profile' element={<UserProfile />} />
            <Route path='/cart' element={<CartPage />} />
          </Route>

          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path='*' element={<NotFoundPage />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App
