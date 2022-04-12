import "./App.css";
// import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Videos from "./Components/Videos/Videos";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
import { createContext, useState } from "react";
import SignUp from "./Components/SignUp/SignUp";

export const BlogContext = createContext()
function App() {
  const [blogs, setBlogs] = useState([])

  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blog/:id" element={<BlogDetails />}></Route>
        <Route path="/videos" element={<Videos />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

    </BlogContext.Provider>
  );
}

export default App;
