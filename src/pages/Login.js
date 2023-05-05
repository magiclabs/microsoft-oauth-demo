import { magic } from "../lib/magic";

const Login = () => {
  const handleSocialLogin = async () => {
    try {
      await magic.oauth.loginWithRedirect({
        provider: "microsoft",
        redirectURI: new URL("/dashboard", window.location.origin).href,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Magic Auth + Microsoft</h1>
      <button onClick={handleSocialLogin}>
        <img src="/microsoft-icon.png" alt="Microsoft logo" />
        Log in with Microsoft
      </button>
    </div>
  );
};

export default Login;
