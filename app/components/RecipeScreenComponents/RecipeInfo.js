import React, { Component } from "react";
import {
  View,
  AppRegistry,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Icon from "../SharedComponents/Icon";

export default class RecipeInfo extends Component {
  static defaultProps = {
    item: null,
  };

  render() {
    return (
      <View style={{ flexDirection: "column", paddingTop: 10 }}>
        <View style={styles.container}>
          <View style={[styles.container, { flexDirection: "column" }]}>
            <Text style={styles.infoTitle}>Ingredients:</Text>
            {this.props.item.ingredients.map((element) => {
              return (
                <View
                  key={element.name}
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <View>
                    <TouchableOpacity
                      style={styles.iconContainer}
                      onPress={() =>
                        this.props.foundIngredientInMatching(
                          this.props.item,
                          element
                        )
                          ? this.props.removeIngredientFromMatching(
                              this.props.item,
                              element
                            )
                          : this.props.addIngredientToMatching(
                              this.props.item,
                              element
                            )
                      }
                    >
                      <Icon
                        name={
                          this.props.foundIngredientInMatching(
                            this.props.item,
                            element
                          )
                            ? "close"
                            : "checkmark"
                        }
                        color={
                          this.props.foundIngredientInMatching(
                            this.props.item,
                            element
                          )
                            ? "red"
                            : "green"
                        }
                        size={20}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text
                    style={[
                      styles.indentedText,
                      this.props.item.matchingIngredients.includes(element)
                        ? element.perfectMatch
                          ? styles.matchingText
                          : styles.almostText
                        : styles.excludesText,
                    ]}
                  >
                    • {element.quantity > 0 ? element.quantity : ""}{" "}
                    {element.name}
                  </Text>
                </View>
              );
            })}
          </View>
          <View
            style={[
              styles.container,
              { flexDirection: "column", flexShrink: 1 },
            ]}
          >
            <Text style={[styles.infoTitle, { paddingLeft: 20 }]}>Tools:</Text>
            {this.props.item.equipment_names.map((element) => {
              return (
                <Text
                  key={element}
                  style={[styles.indentedText, { paddingLeft: 20 }]}
                >
                  • {element}
                </Text>
              );
            })}
          </View>
        </View>
        <View style={styles.button}>
          <Button title="View Steps" onPress={this.props.switchScreen} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#D4E8FD",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  itemAndField: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#D4E8FD",
  },
  icon: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "#D4E8FD",
  },
  matchingText: {
    color: "green",
  },
  almostText: {
    backgroundColor: "orange",
  },
  excludesText: {
    color: "black",
  },
  indentedText: {
    fontSize: 15,
    padding: 5,
    paddingLeft: 0,
    color: "black",
    flexShrink: 1,
    flexWrap: "wrap",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#D4E8FD",
  },
  infoTitle: {
    fontSize: 15,
    padding: 5,
    paddingLeft: 10,
    fontWeight: "bold",
    color: "black",
  },
});
