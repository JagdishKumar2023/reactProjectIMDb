import "./App.css";
import { Home } from "./Pages/Home";
import { HeaderMenu } from "./components/HeaderMenu";
import { Header } from "./components/common/Header";

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <Home />
      <Header />
    </div>
  );
}

export default App;
