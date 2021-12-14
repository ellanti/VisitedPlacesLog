import Map from "./components/Map/Map";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Map></Map>
      </div>
    </Provider>
  );
}

export default App;
