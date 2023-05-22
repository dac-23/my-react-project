// React Funcn
// SPL FUNCn :: understood by REACT.
// return JSX.
function App() {
  return (
    <div>
      <Header />
      <MainBody />
      <MainBody />
      <MainBody />
      <MainBody />
      <MainBody />
      <Footer />
    </div>
  );
}

// User Define Tag
// <Header />
function Header() {
  return (
    <div>
      <h1>THis is Header</h1>
    </div>
  );
}

function MainBody() {
  return (
    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        porro hic saepe. Aperiam repellat culpa soluta assumenda molestias! Quis
        voluptates atque rem libero labore voluptatibus nostrum nesciunt.
        Veritatis, dolorum voluptate.
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h1>This is footer</h1>
    </div>
  );
}

export default App;
