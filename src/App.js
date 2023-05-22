import BootstrapDemo from "./pages/BootstrapDemo";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import ImageDemo from "./pages/ImageDemo";
import InterpolationBasics from "./pages/InterpolationBasics";
import MainBody from "./pages/MainBody";

// return JSX.
function App() {
  return (
    <div>
      <h1>Interpolation Demo</h1>
      <hr />
      <EventDemo />
    </div>
  );
}

function EventDemo() {
  // data member
  let title = "Event Demo";

  // member funcn :: ARROW FUNCN
  let increment = () => {
    alert();
  };

  return (
    <div>
      <h1>{title}</h1>
      <input type="button" value="CLICK ME" onClick={increment} />
    </div>
  );
}

export default App;
