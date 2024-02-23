import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="New York" />
        <footer>
          This project was coded by Naya Frias {""}
          <a
            href="https://github.com/NayaFC/ReactApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
