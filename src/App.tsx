
import './App.css'
import {Home} from "./pages/Home.tsx"
import {Navbar} from "./components/Navbar.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {About} from "./pages/About.tsx";
import {Contact} from "./pages/Contact.tsx";
import {Projects} from "./pages/Projects.tsx";

function App() {


  return (
    <>
      <div className={"bg-black m-4 "}>

        <Navbar />
        <BrowserRouter>
          <Routes>
              {/* Define routes for your pages */}
              <Route

                  path="/"

                  element={<Home />} />
              <Route

                  path="/about"

                  element={<About />} />
              <Route

                  path="/projects"

                  element={<Projects />} />
              <Route

                  path="/contact"

                  element={<Contact />} />
          </Routes>


      </BrowserRouter>

      </div>
    </>
  )
}

export default App
