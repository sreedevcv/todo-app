import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import New from "./New";
import Header from "./Header";
import Edit from "./Edit";
import { DataProvider } from "./context/DataContext";

function App() {
  
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/New" element={<New />} />
          <Route path="/Edit" element={<Edit />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
