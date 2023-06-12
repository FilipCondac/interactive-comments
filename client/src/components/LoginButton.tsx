import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="bg-moderate-blue h-10 m-4 mx-4 px-4 rounded-lg p-2 text-sm text-white"
    >
      Log In
    </button>
  );
};

export default LoginButton;
