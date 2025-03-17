import React from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../components/landingPage";
import Footer from "../components/Footer";
const Home: React.FC  = () => {
return(
    <>
<Navbar />
<LandingPage/>
<Footer />
</>
    );
};

export default Home;