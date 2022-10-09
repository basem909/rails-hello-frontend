import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ShowGreeting from "./components/greeting";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ShowGreeting />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
