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

import ShareComponent from "./components/ShareComponent/ShareComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductDetails />}></Route>
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
