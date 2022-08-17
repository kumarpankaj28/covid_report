import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Report from "./components/Report";
import Testimonial from "./components/Testimonial";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <Hero />
      <Report/>
      <Blog/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
