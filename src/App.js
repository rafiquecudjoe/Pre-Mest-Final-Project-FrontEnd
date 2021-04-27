import AppRouter from "./AppRouter";
import { LoaderComponent } from "./SunspotLoaderComponent";
import { MyProvider } from "./store/Context";
import BoxLoaderComponent from "./SunspotLoaderComponent"

function App() {
  return (
    <div>
      <MyProvider>
        {/* <BoxLoaderComponent/> */}
        <AppRouter />
      </MyProvider>
    </div>
  );
}

export default App;
