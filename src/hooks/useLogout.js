import { useSignOut } from "react-auth-kit";

const useLogout = () => {
  const signOut = useSignOut();

  const logout = async () => {
    try {
      signOut();
    } catch (err) {
      console.error(err);
    }
  };

  return { logout };
};

export default useLogout;
