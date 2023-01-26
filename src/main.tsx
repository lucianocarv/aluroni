import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.scss";
import Menu from "./pages/menu";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Menu />
	</React.StrictMode>
);
