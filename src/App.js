import "./App.css";
import UseLocalStorage from "./components/UseLocalStorage";

function App() {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="App" data-theme={theme}>
      <div className="container">
        <h1>Hello World</h1>
        <button onClick={toggleTheme}>Change theme</button>
      </div>
    </div>
  );
}

export default App;
