import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { store } from "./services/redux/store";
import { router } from "./services/router";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
