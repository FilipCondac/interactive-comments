import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className=" bg-red-600 h-10 m-4 mx-4 px-4 rounded-lg p-2 text-sm text-white"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
