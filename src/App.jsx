import Contact from "./component/contact/Contact";
import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio";
import Topbar from "./component/topbar/Topbar";
import Work from "./component/work/Work";
import Gallery from "./component/gallery/Gallery";

import "./app.scss"
import { useState } from "react";
import Menu from "./component/menu/Menu";
import Aboutme from "./component/aboutme/Aboutme";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div class="sections">
        <Intro/>
        <Aboutme/>
        <Portfolio/>
        <Work/>
        <Gallery/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
