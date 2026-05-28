import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";
import Feedback from "./components/Feedback.jsx";
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero />
      <Services />
      <Feedback />
      <Footer />
    </div>
  );
};

export default App;
