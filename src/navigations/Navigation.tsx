import React from 'react'
import { View, Text } from 'react-native'
import { useRecoilValue } from 'recoil';
import { authState } from '../recoil';
import AuthNaigation from './AuthNavigation';
import MainNavigation from './MainNavigation';

const Navigation = () => {
 const { logged } = useRecoilValue(authState);
 console.log(logged);
 return (
  logged ? <MainNavigation /> : <AuthNaigation />
 )
}

export default Navigation