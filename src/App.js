import Intro from "./components/Intro/Intro";
import Body from "./components/Body/Body";
import Body2 from "./components/Body2/Body2";
import Footer from "./components/Footer/Footer";
import Head from "./components/Head/Head";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Head />
      <Intro />
      <Body />
      <Body2 />
      <Footer />
    </div>
  );
}

export default App;
