import { createStackNavigator } from "react-navigation";
import { SafeAreaView } from "react-native";
import ContactInformation from "./screens/ContactInformation";

const navigationOptions = {
  header: null
};

const routes = {
  CONTACT_INFORMATION: {
    screen: ContactInformation,
    navigationOptions
  }
};
export default createStackNavigator(routes);
