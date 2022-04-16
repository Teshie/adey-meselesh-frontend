import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Signout = () => {
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem("desta");
    history.replace("/signin");
  }, []);

  return null;
};

export default Signout;
