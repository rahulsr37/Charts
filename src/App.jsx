import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
 
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
