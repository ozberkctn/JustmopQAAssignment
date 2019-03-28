import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView
} from "react-native";
import { colors } from "../constants";
import { Heading } from "./Heading";
import MaterialSelectItem from "./MaterialSelect/MaterialSelectItem";
class Select extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, selected: { key: "", value: "" } };
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  onClose() {
    this.setState({ isOpen: false });
  }
  onSelect(value) {
    this.setState({ isOpen: false, selected: value });
  }
  render() {
    const { options, title } = this.props;
    const { isOpen, selected } = this.state;
    return (
      <View>
        <TouchableOpacity
          onPress={this.openModal.bind(this)}
          activeOpacity={1}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomColor: colors.blueyGrey,
            borderWidth: 0,
            borderBottomWidth: 1,
            paddingBottom: 10
          }}
        >
          <Text
            id="title"
            style={{
              fontSize: 16,
              fontFamily: "SFUIDisplay-Medium",
              color: colors.charcoalGrey
            }}
          >
            {title}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              id="selected-value"
              style={{
                marginRight: 20,
                fontSize: 16,
                fontFamily: "SFUIDisplay-Medium",
                color: colors.charcoalGrey
              }}
            >
              {selected.key}
            </Text>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../images/right_arrow.png")}
            />
          </View>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={false}
          visible={isOpen}
          onRequestClose={this.onClose.bind(this)}
        >
          <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
            <TouchableOpacity
              style={{ padding: 20, paddingLeft: 15 }}
              onPress={this.onClose.bind(this)}
            >
              <Image
                source={require("../images/ic_back.png")}
                style={{ width: 23, height: 17 }}
              />
            </TouchableOpacity>
            <View style={{ paddingLeft: 15, paddingRight: 15 }}>
              <Heading title="Account Settings" />
              <View id="item-container" style={{ marginTop: 20 }}>
                {options.map(value => (
                  <MaterialSelectItem
                    key={value.value}
                    value={value}
                    onSelect={this.onSelect.bind(this)}
                  />
                ))}
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </View>
    );
  }
}

Select.defaultProps = { options: [] };

export default Select;
