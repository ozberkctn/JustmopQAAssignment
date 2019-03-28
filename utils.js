import { Dimensions, PixelRatio } from "react-native";
import moment from "moment";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export function getPxForWidth(dp) {
  return (dp / 375) * screenWidth;
}

export function getPxForHeight(dp) {
  const height = screenHeight === 812 ? 736 : screenHeight;
  return (dp / 667) * height;
}

export const fonts = {
  26: PixelRatio.get() < 3 ? 20 : 26,
  20: PixelRatio.get() < 3 ? 20 : 20,
  16: PixelRatio.get() < 3 ? 16 : 16,
  17: PixelRatio.get() < 3 ? 17 : 17,
  15: PixelRatio.get() < 3 ? 15 : 15,
  12: PixelRatio.get() < 3 ? 12 : 12
};
