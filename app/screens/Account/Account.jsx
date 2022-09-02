import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import { UserGuest, UserLogged } from "./";
import { Loading } from "../../components/";

export const Account = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) return <Loading isVisible={true} text="Cargando ..." />;

  return login ? <UserLogged /> : <UserGuest />;
};
