import React, { Component } from "react";
import { View, Text, TextInput, Platform } from "react-native";
import { colors } from "../constants";
import { TextInputMask } from "react-native-masked-text";

class MaterialTextField extends Component {
  constructor(props) {
    super(props);
    this.state = { text: props.text };
  }

  handleTextChange(text) {
    this.setState({ text });
    this.props.onChangeText(text);
  }
  render() {
    const {
      placeholder,
      color,
      multiline,
      autoFocus,
      maxHeight,
      placeholderStyle,
      subPlaceholder,
      onBlur,
      error,
      mask,
      borderColor,
      maxLength
    } = this.props;

    return (
      <View>
        {placeholderStyle == "basic" ? null : (
          <Text
            style={{
              fontSize: 14,
              color: color,
              fontFamily: "SFUIDisplay-Medium"
            }}
          >
            {placeholder}
          </Text>
        )}

        <TextInput
          {...(maxLength ? { maxLength: maxLength } : null)}
          ref={input => {
            debugger;
            this.props.onRef(input);
          }}
          onSubmitEditing={this.props.onSubmitEditing}
          {...(placeholderStyle == "basic"
            ? { placeholder: placeholder }
            : null)}
          {...(subPlaceholder ? { placeholder: subPlaceholder } : null)}
          autoFocus={autoFocus}
          returnKeyType="next"
          multiline={multiline}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          autoCapitalize="none"
          style={{
            textAlignVertical: "top",
            height: multiline ? 80 : 30,
            maxHeight: maxHeight,
            borderBottomColor: borderColor,
            borderWidth: 0,
            borderBottomWidth: 1,
            color: color,
            fontSize: 16,
            paddingTop: 0,
            paddingBottom: 0,

            marginTop: 10
          }}
          onChangeText={this.handleTextChange.bind(this)}
          value={this.state.text}
          onBlur={() => onBlur && onBlur(this.state.text)}
        />

        {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
      </View>
    );
  }
}

MaterialTextField.defaultProps = {
  onChangeText: () => {},
  onRef: () => {},
  color: colors.blueyGrey,
  multiline: false,
  autoFocus: false,
  maxHeight: null,
  borderColor: colors.blueyGrey
};

export default MaterialTextField;
