import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import Navbar from "./components/Navbar/Navbar";

import { ProductDetails } from "./components/SingleProductDetails/ProductDetails";

import Products from "./components/Products/Products";
import Profile from "./components/Profile/Profile";

import ScrollToTop from "./components/scrollTopTop";

import Login from "./components/SignUpLogIn/LogIn";
import SignUp from "./components/SignUpLogIn/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/:id" element={<ProductDetails />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        {/* <Navbar />
      <Products />
      <Footer /> */}
        {/* <ProductDetails /> */}
        {/* <PostDeal /> <Join />*/}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
