import NavRoute from "./Components/NavRoute";
import Navigation from "./Components/Navigation";
import {Footer} from "./Components/Footer";

function App() {
  return (
      //TODO add fonts
      <div>
        {/*  TODO create app responsive*/}
        <Navigation/>
        <NavRoute/>
          <Footer/>
      </div>
  );
}

export default App;
