import React, { useEffect, useState } from "react";
import { FlatList, View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import logoImg from "../../assets/logo.png";

import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
export default function Incidents() {
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function navigateToDetail(incident) {
    navigation.navigate("Detail", { incident });
  }

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);
    const response = await api.get("incidents", {
      params: { page },
    });
    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers["x-total-count"]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total of <Text style={styles.headerTextBold}>{total} incidents</Text>
        </Text>
      </View>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.descrition}>
        Choose one of the incidents and save the day.
      </Text>
      <FlatList
        style={styles.incidentList}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        data={incidents}
        keyExtractor={(indident) => String(indident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>INCIDENT:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>Value:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat("pt-PT", {
                style: "currency",
                currency: "EUR",
              }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(incident)}
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
