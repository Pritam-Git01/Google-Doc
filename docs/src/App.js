
import Home from "./components/pages/Home/home";
import { Provider } from "react-redux";
import store from "./Redux/store";



function App() {
  return (
    <>
  <Provider store={store}>
  <Home/>
  </Provider>

 
    </>

  );
}

export default App;
