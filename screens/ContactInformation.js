import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform
} from "react-native";
import { Heading } from "../components/Heading";
import MaterialSelect from "../components/MaterialSelect/index";
import { getPxForHeight, getPxForWidth } from "../utils";
import MaterialTextField from "../components/MaterialTextField";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const cities = [{ name: "City1", id: 1 }, { name: "City2", id: 2 }];
const regions = [{ name: "Region1", id: 1 }, { name: "Region2", id: 2 }];

class ContactInformation extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ paddingLeft: 20, paddingRight: 20, marginTop: 12 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack(null)}
            style={{ padding: 5, paddingLeft: 0, width: 60, height: 35 }}
          >
            <Image
              style={{ width: 23, height: 17 }}
              source={require("../images/back.png")}
            />
          </TouchableOpacity>
          <View style={{ marginTop: getPxForHeight(10) }}>
            <Heading title="Contact Information" />
          </View>
          <ScrollView contentContainerStyle={{ paddingBottom: 180 }}>
            <View style={{ flex: 1 }}>
              <View style={{ marginTop: getPxForHeight(30) }}>
                <MaterialSelect
                  placeholder="Select your city"
                  title="City"
                  options={cities}
                />
              </View>
              <View style={{ marginTop: getPxForHeight(30) }}>
                <MaterialSelect
                  placeholder="Select Your Region"
                  title="Region"
                  options={regions}
                />
              </View>
              <View style={{ marginTop: getPxForHeight(30) }}>
                <MaterialTextField placeholder="Address" />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

export default ContactInformation;
