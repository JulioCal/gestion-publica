import { Route } from "wouter";
import "./App.css";
import Login from "./Components/LoginComponent/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./Components/LoadingComponent/Loader";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Login} />
      <Route path="/home" />
      <Route path="/loader" component={Loader} />
    </div>
  );
}

export default App;
