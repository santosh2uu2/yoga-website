import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import ForgotPass from "./ForgotPass";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import BuyNowForm from "./components/BuyNowForm";
import Contact from "./components/Contact";
import AdminDashboard from "./components/AdminDashboard"
import ContactUs from "./components/Contactus";
import ReviewForm from "./components/Review";
import InstructorCard from "./components/InstructorCard";
import CourseDetails from "./components/review1";
import AdminLogin from "./components/AdminLogin";
import AdminSignup from "./components/AdminSignup";
import Footer from "./components/Footer";
//import Chatbot from "./components/chatbot";


function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpass" element={<ForgotPass />} />
          <Route path="/buynow" element={<BuyNowForm />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/review" element={<ReviewForm/>} />
          <Route path="/instructor" element={<InstructorCard/>} />
          <Route path="/course1" element={<CourseDetails/>} />
          <Route path="/adminlogin" element={<AdminLogin/>} />
          <Route path="/adminsignup" element={<AdminSignup/>} />
          <Route path="/footer" element={<Footer/>}/>
        </Routes>

        <Toaster />
      </div>
    </>
  );
}

export default App;
