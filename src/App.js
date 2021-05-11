import AppRouter from "./AppRouter";


import { MyProvider } from "./store/Context";


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
