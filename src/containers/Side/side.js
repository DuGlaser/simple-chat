import React, { useContext } from "react";
import SideComponent from "../../components/SideMenu/side";
import { UserContext } from "../../context";

const SideContainer = () => {
  const user = useContext(UserContext);

  return (
    <>
      <SideComponent user={user} />
    </>
  );
};

export default SideContainer;
