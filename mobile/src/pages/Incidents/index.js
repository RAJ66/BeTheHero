import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";
import logoImg from "../../assets/logo.png";

export default function Incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total of <Text style={styles.headerTextBold}>0 incidents</Text>
        </Text>
      </View>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.descrition}>
        Choose one of the incidents and save the day.
      </Text>
    </View>
  );
}
