import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { colors } from "../../constants";

class MaterialSelectItem extends Component {
  render() {
    const { value, onSelect } = this.props;
    return (
      <TouchableOpacity key={value.name} onPress={() => onSelect(value)}>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text
            id="Material-Select-Item-Text"
            style={{
              fontSize: 16,
              fontFamily: "SFUIDisplay-Medium",
              color: colors.blueyGrey
            }}
          >
            {value.name}
          </Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../../images/right_arrow.png")}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

MaterialSelectItem.defaultProps = {
  value: { name: "", value: "" },
  onSelect: () => {}
};

export default MaterialSelectItem;
