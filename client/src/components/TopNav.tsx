import { useEffect } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const TopNav = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <nav className="flex ml-auto">
      {isAuthenticated ? (
        <section className="flex">
          <div className="flex mt-3 mr-2">
            <img
              src={user?.picture}
              alt={user?.name}
              className="border-black border-2 rounded-full w-12 h-12 mr-4"
            />
            <h2 className=" font-bold mt-3">{user?.name}</h2>
          </div>
          <LogoutButton />
        </section>
      ) : (
        <LoginButton />
      )}
    </nav>
  );
};

export default TopNav;
