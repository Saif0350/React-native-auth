import { Stack } from "expo-router";

export default function AppEntry() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="modal"
        options={{ presentation: "card" }}
      ></Stack.Screen>
    </Stack>
  );
}
