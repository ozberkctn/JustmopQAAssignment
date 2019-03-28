import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  FlatList
} from "react-native";

import MaterialSelectItem from "./MaterialSelectItem";
import { colors } from "../../constants";
import { Heading } from "../Heading";
import MaterialTextField from "../MaterialTextField";
import { ifIphoneX } from "react-native-iphone-x-helper";

class MaterialSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, selected: { name: "", value: "" } };
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  onClose() {
    this.setState({ isOpen: false, searchKeyword: "" });
  }

  onSelect(value) {
    this.setState({ isOpen: false, selected: value, searchKeyword: "" });
    this.props.onSelect(value);
  }

  render() {
    const { options, title, placeholder } = this.props;
    const { isOpen, selected, searchKeyword } = this.state;

    const filteredData = searchKeyword
      ? options.filter(value => {
          if (
            value.name.substring(0, searchKeyword.length).toUpperCase() ==
            searchKeyword.toUpperCase()
          )
            return value;
        })
      : options;

    return (
      <View>
        <TouchableOpacity
          onPress={this.openModal.bind(this)}
          activeOpacity={1}
          style={{
            borderBottomColor: colors.blueyGrey,
            borderWidth: 0,
            borderBottomWidth: 1,
            paddingBottom: 5
          }}
        >
          <Text
            id="title"
            style={{
              fontSize: 12,
              fontFamily: "SFUIDisplay-Medium",
              color: colors.blueyGrey
            }}
          >
            {title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {selected.name ? (
              <Text
                style={{
                  marginRight: 20,
                  fontSize: 16,
                  fontFamily: "SFUIDisplay-Medium",
                  color: colors.charcoalGrey
                }}
              >
                {selected.name}
              </Text>
            ) : (
              <Text
                style={{
                  marginRight: 20,
                  fontSize: 16,
                  fontFamily: "SFUIDisplay-Medium",
                  color: colors.blueyGrey
                }}
              >
                {placeholder}
              </Text>
            )}

            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../images/right_arrow.png")}
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
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={{ padding: 20, paddingLeft: 25, paddingTop: 17 }}
                onPress={this.onClose.bind(this)}
              >
                <Image
                  source={require("../../images/ic_back.png")}
                  style={{ width: 23, height: 17 }}
                />
              </TouchableOpacity>
              <View style={{ paddingLeft: 15, paddingRight: 15 }}>
                <Heading title={placeholder} />
                <View style={{ marginTop: 30 }}>
                  <MaterialTextField
                    onChangeText={searchKeyword =>
                      this.setState({ searchKeyword })
                    }
                    placeholder="Search"
                    placeholderStyle="basic"
                    color="black"
                  />
                </View>

                <View style={{ marginTop: 20 }}>
                  <FlatList
                    id="item-container"
                    style={{
                      ...ifIphoneX(
                        {
                          marginBottom: 250
                        },
                        {
                          marginBottom: 250
                        }
                      )
                    }}
                    data={filteredData}
                    renderItem={({ item }) => (
                      <MaterialSelectItem
                        value={item}
                        onSelect={this.onSelect.bind(this)}
                      />
                    )}
                  />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </View>
    );
  }
}

MaterialSelect.defaultProps = { options: [], onSelect: () => {} };

export default MaterialSelect;
