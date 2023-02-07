import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AskQuestion from "./components/Join/AskQuestion";
import Join from "./components/Join/Join";
import WelcomeBack from "./components/Join/WelcomeBack";
import WriteReview from "./components/Join/WriteReview";
import Navbar from "./components/Navbar/Navbar";
import PostDeal from "./components/PostDeal/PostDeal";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";
import ProductItem from "./components/ProductItem/ProductItem";
import Header from "./components/Products/Header/Header";
import Products from "./components/Products/Products";
import Profile from "./components/Profile/Profile";
import ProfileInfo from "./components/Profile/ProfileInfo/ProfileInfo";

import ShareComponent from "./components/ShareComponent/ShareComponent";
import Login from "./components/SignUpLogIn/LogIn";
import SignUp from "./components/SignUpLogIn/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
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
