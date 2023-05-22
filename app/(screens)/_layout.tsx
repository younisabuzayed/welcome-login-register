import { Stack } from "expo-router";
import React from "react";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  headerShown: false
};

export default function Layout() {
  return <Stack
    screenOptions={unstable_settings} />;
}