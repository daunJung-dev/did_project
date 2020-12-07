import 'react-native-gesture-handler';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Navigation } from './src/navigations';

export default function App() {
  return (
    <RecoilRoot>
      <Navigation />
    </RecoilRoot>
  );
}