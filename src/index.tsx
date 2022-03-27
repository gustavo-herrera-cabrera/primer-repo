import { render } from "react-dom";
import { App } from "./components/App";

const root = document.getElementById("root");
const app = App();

render(<App />, root);
