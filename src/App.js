import HomePage from "./Components/Home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NavBar from "./Components/NavBar/NavBar";
import { useEffect, useState } from "react";
import AddArt from "./Components/ArtCollection/AddArt";
import DetailArt from "./Components/ArtCollection/DetailArt";
import UpdateArt from "./Components/ArtCollection/UpdateArt";
import DeleteArt from "./Components/ArtCollection/DeleteArt";
import Footer from "./Components/Footer/Footer";
import AddBooking from "./Components/Booking/AddBooking";
import ViewAllBooking from "./Components/Booking/ViewAllBooking";
import UpdateBooking from "./Components/Booking/UpdateBooking";
import DeleteBooking from "./Components/Booking/DeleteBooking";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize]);

  return (
    <div className="h-screen w-screen overflow-auto dark:text-white dark:bg-slate-700 text-black">
      <div className="">
        <Router>
          <NavBar isMobile={isMobile} />
          <div className="">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/addArt" element={<AddArt />}/>
              <Route path="/detailArt/:artId" element={<DetailArt />}/>
              <Route path="/updateArt/:artId" element={<UpdateArt />}/>
              <Route path="/deleteArt/:artId" element={<DeleteArt />}/>
              <Route path="/addBooking" element={<AddBooking />}/>
              <Route path="/viewAllBooking" element={<ViewAllBooking />}/>
              <Route path="/updateBooking/:bookingId" element={<UpdateBooking />}/>
              <Route path="/deleteBooking/:bookingId" element={<DeleteBooking />}/>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
