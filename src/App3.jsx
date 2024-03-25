import "./App.css";
import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google";

function App() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return <button onClick={() => login()}>Sign in with Google 🚀</button>;
}

export default App;
