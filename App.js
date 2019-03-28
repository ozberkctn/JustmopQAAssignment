/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import Router from "./router";
import SplashScreen from "react-native-splash-screen";



class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider>
        <Router />
      </Provider>
    );
  }
}

export default App;
