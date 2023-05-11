import ReactDOM from "react-dom/client";
import EmailcontextProvider from "./Context/emailContextprovider";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <EmailcontextProvider>
      <App />
    </EmailcontextProvider>
  </BrowserRouter>
);
