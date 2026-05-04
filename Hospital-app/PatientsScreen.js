import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import Header from "../components/Header";
import { Swipeable } from "react-native-gesture-handler";

export default function PatientsScreen({ navigation }) {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState("");
  const [disease, setDisease] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  const handleLogout = () => {
    navigation.replace("Login");
  };

  // Initial Data
  useEffect(() => {
    loadInitialPatients();
  }, []);

  const loadInitialPatients = () => {
    const initial = [
      { id: "1", name: "Rahul Sharma", disease: "Fever" },
      { id: "2", name: "Priya Mehta", disease: "Diabetes" },
    ];
    setPatients(initial);
  };

  // Add Patient
  const handleAdd = () => {
    if (!name || !disease) return;

    const newPatient = {
      id: Date.now().toString(),
      name,
      disease,
    };

    setPatients((prev) => [...prev, newPatient]);
    setName("");
    setDisease("");
  };

  // Delete Patient
  const handleDelete = (id) => {
    setPatients((prev) => prev.filter((p) => p.id !== id));
  };

  // Pull to Refresh
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      loadInitialPatients();
      setRefreshing(false);
    }, 1000);
  };

  // Infinite Scroll
  const loadMore = () => {
    const newData = Array.from({ length: 5 }).map((_, i) => ({
      id: Date.now().toString() + i,
      name: "Patient " + (page * 5 + i),
      disease: "Checkup",
    }));

    setPatients((prev) => [...prev, ...newData]);
    setPage((prev) => prev + 1);
  };

  // Swipe UI (FIXED)
  const renderRightActions = (id) => {
    return (
      <TouchableOpacity
        style={styles.deleteBox}
        onPress={() => handleDelete(id)}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => renderRightActions(item.id)}
    >
      <View style={styles.card}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.disease}>{item.disease}</Text>
      </View>
    </Swipeable>
  );

  return (
    <View style={styles.container}>
      <Header title="Patients" onLogout={handleLogout} />

      {/* FORM */}
      <View style={styles.form}>
        <TextInput
          placeholder="Patient Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <TextInput
          placeholder="Disease"
          value={disease}
          onChangeText={setDisease}
          style={styles.input}
        />

        <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
          <Text style={styles.btnText}>Add Patient</Text>
        </TouchableOpacity>
      </View>

      {/* LIST */}
      <FlatList
        data={patients}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <Text style={styles.empty}>No patients available</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f6fb" },

  form: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },

  addBtn: {
    backgroundColor: "#2E86DE",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginVertical: 6,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

  disease: {
    color: "gray",
  },

  deleteBox: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    marginVertical: 6,
    borderRadius: 10,
  },

  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },

  empty: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
  },
});