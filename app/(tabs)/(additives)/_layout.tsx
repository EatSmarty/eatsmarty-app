import React from 'react';
import { Stack } from 'expo-router';

export default function AdditivesLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Additives' }} />
      <Stack.Screen name="[id]" options={{ title: 'Additive Details' }} />
    </Stack>
  );
}
