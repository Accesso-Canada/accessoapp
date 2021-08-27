import React from "react";
import {View} from 'react-native'

import WelcomeScreen from "./WelcomeScreen";
import NavHandler from './MainPage/HomeContainer'
import ReviewContainer from './ReviewsPage/ReviewContainer'


export default function App() {
  return (
    <ReviewContainer/>
  );
}

//  <NavHandler/>
//<WelcomeScreen/> <ReviewContainer/>