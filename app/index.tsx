import { Redirect } from "expo-router";
import React from "react";

const StartPage = () => {
  return <Redirect href={"/register"} />
}

export default StartPage;