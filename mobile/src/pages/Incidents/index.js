import React from "react";
import { FlatList, View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import logoImg from "../../assets/logo.png";

import { useNavigation } from "@react-navigation/native";

export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate("Detail");
  }

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
      <FlatList
        style={styles.incidentList}
        data={[1, 2, 3]}
        keyExtractor={(indident) => String(indident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>Apad</Text>

            <Text style={styles.incidentProperty}>INCIDENT:</Text>
            <Text style={styles.incidentValue}>cat</Text>

            <Text style={styles.incidentProperty}>Value:</Text>
            <Text style={styles.incidentValue}>120€</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}
            >
              <Text style={styles.detailsButtonText}>See more details</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
