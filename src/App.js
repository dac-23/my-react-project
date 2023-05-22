import Footer from "./pages/Footer";
import Header from "./pages/Header";
import MainBody from "./pages/MainBody";
import "bootstrap/dist/css/bootstrap.css";

// return JSX.
function App() {
  return (
    <div>
      <Header />
      <BootstrapDemo />
    </div>
  );
}

function BootstrapDemo() {
  return (
    <div>
      <h1 class="bg-primary p-3 text-light">Bootstrap Demo</h1>
    </div>
  );
}

export default App;
