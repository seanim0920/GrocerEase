import React, { Component } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, } from 'react-native';
import Icon from '../SharedComponents/Icon';

export default class ActionBar extends Component {
  static defaultProps = {
    text: '',
    addNewItem: undefined,
    searchData: undefined,
  }
  
  focusOnTextInput = () => {
    this.textInput.focus()
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.sortIconContainer}
          onPress={this.props.sortList}
        >
          <Icon
            style={styles.icon}
            name="list-box"
            color="#51A4F7"
            size={24}
          />
        </TouchableOpacity>
        <TextInput style={styles.textInput}
          ref={input => { this.textInput = input }}
          placeholder="Find recipes or ingredients!"
          onChangeText={
            this.props.searchData
          }
        />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={
            this.focusOnTextInput
          }
        >
          <Icon
            style={styles.icon}
            name="search"
            color="#ccc"
            size={24}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderBottomWidth: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    padding: 10,
  },
  icon: {
    marginLeft: 5,
    marginRight: 10,
  },
  buttons: {
    flexDirection: "row",
    marginRight: 10,
  },
  textContainer: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20
  },
  iconContainer: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 40,
  },
  sortIconContainer: {
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 40,
    backgroundColor: '#fff',
    borderRightWidth: 0,
    marginLeft: 5,
  },
});