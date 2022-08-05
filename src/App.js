import { Route } from "wouter";
import "./App.css";
import Login from "./Components/LoginComponent/Login";
import Loader from "./Components/LoadingComponent/Loader";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/loader" component={Loader} />
    </div>
  );
}

export default App;
