import React, { useEffect } from "react";

import useAPI from "../../hooks/useAPI";
import ShellView from "./ShellView";

const ShellContainer = () => {
  const [, getUsersList] = useAPI("GET_USERS_LIST", {
    lazy: true,
  });

  useEffect(() => {
    getUsersList();
  }, []);

  return <ShellView />;
};

export default ShellContainer;
