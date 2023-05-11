import ReactDOM from "react-dom/client";
import EmailcontextProvider from "./Context/emailContextprovider";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <EmailcontextProvider>
    <App />
  </EmailcontextProvider>
);
