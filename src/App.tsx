import "./App.css";
import { Toaster } from "sonner";
import LandingPage from "./pages/LandingPage";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      {/* <LoginForm onSubmit={() => {}} /> */}
      <LandingPage />
      <Toaster richColors />
    </>
  );
}

export default App;
