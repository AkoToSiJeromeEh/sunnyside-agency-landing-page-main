import "./App.css";
import { Navbar, Main, Footer } from "./components";
import { landingData } from "./data";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className=" main-layout grid grid-rows-[auto_1fr_auto] min-h-dvh relative     ">
      <Navbar MenuItems={landingData} />
      <ScrollToTop
        smooth
        style={{
          width: "fit-content",
          padding: "0.2rem 0.5rem ",
          borderRadius: "5rem",
          color: "hsl(198, 62%, 26%)",
          backgroundColor: "white",
        }}
        color="hsl(198, 62%, 26%)"
      />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
