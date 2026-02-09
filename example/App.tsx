import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import WheelPicker from "react-native-expo-wheel-picker";

// Sample data generators
function createNumberItems(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `${i}`,
    value: i,
  }));
}

function createCityItems() {
  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Jacksonville",
    "Fort Worth",
    "Columbus",
    "Charlotte",
    "San Francisco",
    "Indianapolis",
    "Seattle",
    "Denver",
    "Boston",
  ];
  return cities.map((city, i) => ({
    id: i,
    name: city,
    value: i,
  }));
}

function createMonthItems() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months.map((month, i) => ({
    id: i,
    name: month,
    value: i,
  }));
}

export default function App() {
  const [numberValue, setNumberValue] = useState(25);
  const [cityValue, setCityValue] = useState(0);
  const [monthValue, setMonthValue] = useState(new Date().getMonth());
  const [compactValue, setCompactValue] = useState(5);

  const numbers = createNumberItems(100);
  const cities = createCityItems();
  const months = createMonthItems();
  const compactNumbers = createNumberItems(10);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🎡 Wheel Picker</Text>
          <Text style={styles.headerSubtitle}>Examples for Expo 53+</Text>
        </View>

        {/* Example 1: Number Picker */}
        <View style={styles.section}>
          <Text style={styles.title}>Number Picker (0-99)</Text>
          <Text style={styles.subtitle}>Selected: {numberValue}</Text>
          <View style={styles.pickerContainer}>
            <WheelPicker numberOfVisibleRows={7} value={numberValue} onChange={setNumberValue} items={numbers} />
          </View>
        </View>

        {/* Example 2: City Picker */}
        <View style={styles.section}>
          <Text style={styles.title}>City Picker</Text>
          <Text style={styles.subtitle}>Selected: {cities[cityValue]?.name}</Text>
          <View style={styles.pickerContainer}>
            <WheelPicker numberOfVisibleRows={5} value={cityValue} onChange={setCityValue} items={cities} />
          </View>
        </View>

        {/* Example 3: Month Picker */}
        <View style={styles.section}>
          <Text style={styles.title}>Month Picker</Text>
          <Text style={styles.subtitle}>Selected: {months[monthValue]?.name}</Text>
          <View style={styles.pickerContainer}>
            <WheelPicker numberOfVisibleRows={5} value={monthValue} onChange={setMonthValue} items={months} />
          </View>
        </View>

        {/* Example 4: Compact Picker */}
        <View style={styles.section}>
          <Text style={styles.title}>Compact Picker (3 rows)</Text>
          <Text style={styles.subtitle}>Selected: {compactValue}</Text>
          <View style={styles.pickerContainer}>
            <WheelPicker
              numberOfVisibleRows={3}
              value={compactValue}
              onChange={setCompactValue}
              items={compactNumbers}
            />
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>react-native-expo-wheel-picker</Text>
          <Text style={styles.footerSubtext}>v0.2.0 • MIT License</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#4A90E2",
    padding: 24,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.9)",
  },
  section: {
    backgroundColor: "white",
    margin: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  pickerContainer: {
    alignItems: "center",
  },
  footer: {
    alignItems: "center",
    padding: 32,
    marginBottom: 20,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  footerSubtext: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
