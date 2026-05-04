import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Header from "../components/Header";

export default function ProfileScreen({ navigation }) {
  const handleLogout = () => {
    navigation.replace("Login");
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="Hospital Profile" onLogout={handleLogout} />

      {/* HOSPITAL HEADER CARD */}
      <View style={styles.topCard}>
        <Text style={styles.hospitalName}>🏥 City Care Hospital</Text>
        <Text style={styles.tagline}>“Caring Beyond Limits”</Text>
      </View>

      {/* DOCTORS SECTION */}
      <Text style={styles.sectionTitle}>👨‍⚕️ Our Doctors</Text>

      <View style={styles.row}>
        <View style={styles.doctorCard}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
            style={styles.image}
          />
          <Text style={styles.docName}>Dr. Sharma</Text>
          <Text style={styles.special}>Cardiologist</Text>
        </View>

        <View style={styles.doctorCard}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/45.jpg" }}
            style={styles.image}
          />
          <Text style={styles.docName}>Dr. Mehta</Text>
          <Text style={styles.special}>Neurologist</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.doctorCard}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/65.jpg" }}
            style={styles.image}
          />
          <Text style={styles.docName}>Dr. Richa</Text>
          <Text style={styles.special}>Orthopedic</Text>
        </View>

        <View style={styles.doctorCard}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }}
            style={styles.image}
          />
          <Text style={styles.docName}>Dr. Khan</Text>
          <Text style={styles.special}>Pediatrician</Text>
        </View>
      </View>

      {/* ACHIEVEMENTS */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>🏆 Achievements</Text>
        <Text style={styles.item}>✔ Best Hospital Award 2023</Text>
        <Text style={styles.item}>✔ 10,000+ Patients Treated</Text>
        <Text style={styles.item}>✔ NABH Certified</Text>
      </View>

      {/* CAMPS */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>🩺 Health Camps</Text>
        <Text style={styles.item}>✔ Free Eye Checkup Camp</Text>
        <Text style={styles.item}>✔ Blood Donation Drive</Text>
        <Text style={styles.item}>✔ Rural Health Awareness Camp</Text>
      </View>

      {/* ADDRESS */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>📍 Address</Text>
        <Text style={styles.item}>
          City Care Hospital, MG Road, Pune, Maharashtra, India
        </Text>
        <Text style={styles.item}>📞 +91 9876543210</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6fb",
  },

  topCard: {
    backgroundColor: "#f67584",
    padding: 20,
    margin: 10,
    borderRadius: 15,
    alignItems: "center",
    elevation: 4,
  },

  hospitalName: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  tagline: {
    color: "#fff",
    marginTop: 5,
    fontStyle: "italic",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  doctorCard: {
    backgroundColor: "#fff",
    flex: 1,
    margin: 5,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 8,
  },

  docName: {
    fontWeight: "bold",
    fontSize: 14,
  },

  special: {
    color: "gray",
    fontSize: 12,
  },

  card: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 15,
    borderRadius: 12,
    elevation: 3,
  },

  item: {
    marginTop: 5,
    fontSize: 14,
  },
});