
import Home from "./components/pages/Home/home";
import { Provider } from "react-redux";
import store from "./Redux/store";
import "./App.css";



function App() {
  return (
    <div className="App">
  <Provider store={store}>
  <Home/>
  </Provider>

 
    </div>

  );
}

export default App;
