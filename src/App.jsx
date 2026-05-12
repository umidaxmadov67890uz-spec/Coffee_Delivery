import {Route, Routes } from "react-router-dom"
import Laout from "./pages/laout"
import HomePage from "./pages/home/HomePage"
import MyFavoritesPage from "./pages/my-favorites/MyFavoritesPage"
import CartPege from "./pages/basket/CartPege"
import FormPage from "./pages/form/FormPage"

function App() {
  return (
    
      <Routes>
        <Route element={<Laout/>}>
          <Route index element={<HomePage/>} />
          <Route path="/my-favorites" element={<MyFavoritesPage/>} />
          <Route path="/cart" element={<CartPege/>} />
        </Route>
        <Route path="/form" element={<FormPage />} />
      </Routes>
    
  )
}

export default App
