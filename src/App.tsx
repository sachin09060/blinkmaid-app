import "./App.css";
import { ToastProvider } from "./components/toast";
import Router from "./Router";

const App = () => {
  return (
    <div>
      <ToastProvider>
        <Router />
      </ToastProvider>
    </div>
  );
};

export default App;
