import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Main from "./Main";
import Product from "./Product";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/main/:id" element={<Main />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  );
}



{/* <BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/main" element={<Main/>}></Route>
  <Route path="/main:/id" element={<Main/>}></Route>
  <Route path="/main:/id" element={<Product/>}></Route>
</Routes>
</BrowserRouter> */}
