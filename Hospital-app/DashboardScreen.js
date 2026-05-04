import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Header from "../components/Header";

export default function DashboardScreen({ navigation }) {

  const handleLogout = () => {
    navigation.replace("Login");
  };

  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <Header title="Dashboard" onLogout={handleLogout} />

      {/* WELCOME */}
      <Text style={styles.text}>Welcome to Dashboard</Text>

      {/* STATS */}
      <Text style={styles.sectionTitle}>📊 Hospital Overview</Text>

      <View style={styles.row}>
        <View style={[styles.card, { backgroundColor: "#00b894" }]}>
          <Text style={styles.value}>120</Text>
          <Text style={styles.label}>Patients</Text>
        </View>

        <View style={[styles.card, { backgroundColor: "#0984e3" }]}>
          <Text style={styles.value}>25</Text>
          <Text style={styles.label}>Doctors</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={[styles.card, { backgroundColor: "#fdcb6e" }]}>
          <Text style={styles.value}>48</Text>
          <Text style={styles.label}>Appointments</Text>
        </View>

        <View style={[styles.card, { backgroundColor: "#e17055" }]}>
          <Text style={styles.value}>32</Text>
          <Text style={styles.label}>Beds</Text>
        </View>
      </View>

      {/* QUICK ACTIONS */}
      <Text style={styles.sectionTitle}>⚡ Quick Actions</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.menuCard}>
          <Text style={styles.icon}>👨‍⚕️</Text>
          <Text style={styles.menuText}>Doctors</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuCard}
          onPress={() => navigation.navigate("Patients")}
        >
          <Text style={styles.icon}>🧑‍🤝‍🧑</Text>
          <Text style={styles.menuText}>Patients</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.menuCard}>
          <Text style={styles.icon}>📅</Text>
          <Text style={styles.menuText}>Appointments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <Text style={styles.icon}>💊</Text>
          <Text style={styles.menuText}>Pharmacy</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6fb",
  },

  text: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "600",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
    marginTop: 15,
  },

  row: {
    flexDirection: "row",
    paddingHorizontal: 8,
    justifyContent: "space-between",
  },

  // STAT CARD
  card: {
    flex: 1,
    margin: 6,
    padding: 20,
    borderRadius: 12,
  },

  value: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  label: {
    color: "#fff",
    marginTop: 5,
  },

  // MENU CARD
  menuCard: {
    flex: 1,
    margin: 6,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
  },

  icon: {
    fontSize: 28,
  },

  menuText: {
    marginTop: 8,
    fontWeight: "bold",
  },
});