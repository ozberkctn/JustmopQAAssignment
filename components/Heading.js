import React, { Component } from "react";
import { Text } from "react-native";
import { colors } from "../constants";
import { fonts } from "../utils";
export const Heading = ({ title, color }) => (
  <Text
    style={{
      color: color,
      fontSize: fonts[26],
      fontFamily: "SFUIDisplay-SemiBold"
    }}
  >
    {title}
  </Text>
);

Heading.defaultProps = { title: "", color: colors.charcoalGrey };
