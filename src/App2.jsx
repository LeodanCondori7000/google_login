import "./App.css";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

function App() {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          }
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
      console.log(tokenResponse);
    },
  });

  return <button onClick={() => login()}>Sign in with Google 🚀</button>;
}

export default App;
