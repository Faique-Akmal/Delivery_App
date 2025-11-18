

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const ICON_LOCATION = require("../images/locationRed.png"); // left pin (small)
const ICON_LOCATION_GREEN = require("../images/Ellipse.png"); // small green circle
const IMG_BIKE = require("../images/Bike.png");
const IMG_CAR = require("../images/Car.png");
const IMG_VAN = require("../images/Van.png");

export default function InstantDelivery({ navigation }) {
  const [vehicle, setVehicle] = useState("bike"); // 'bike' | 'car' | 'van'

  return (
    <View style={styles.full}>
      {/* content area like bottom sheet */}
      <ScrollView
        contentContainerStyle={styles.sheet}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.handle} />

        <Text style={styles.title}>Instant Delivery</Text>

        <Text style={styles.label}>Pickup Location</Text>
        <View style={styles.inputBox}>
          <Image source={ICON_LOCATION} style={styles.pinSmall} />
          <Text style={styles.inputText}>32 Samwell Sq, Chevron</Text>
        </View>

        <Text style={[styles.label, { marginTop: 14 }]}>Delivery Location</Text>
        <View style={styles.inputBox}>
          <Image source={ICON_LOCATION_GREEN} style={styles.pinSmall} />
          <Text style={styles.inputText}>21b, Karimu Kotun Street, Victoria Island</Text>
        </View>

        <Text style={[styles.label, { marginTop: 18 }]}>Vehicle Type</Text>

        <View style={styles.vehicleRow}>
          <TouchableOpacity
            style={[styles.vehicleBox, vehicle === "bike" && styles.vehicleBoxActive]}
            onPress={() => setVehicle("bike")}
          >
            <Image source={IMG_BIKE} style={styles.vehicleIcon} resizeMode="contain" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.vehicleBox, vehicle === "car" && styles.vehicleBoxActive]}
            onPress={() => setVehicle("car")}
          >
            <Image source={IMG_CAR} style={styles.vehicleIcon} resizeMode="contain" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.vehicleBox, vehicle === "van" && styles.vehicleBoxActive]}
            onPress={() => setVehicle("van")}
          >
            <Image source={IMG_VAN} style={styles.vehicleIcon} resizeMode="contain" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation?.navigate?.("ScheduleDelivery")}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  full: { flex: 1, backgroundColor: "#fff" },
  sheet: {
    paddingTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 32,
    backgroundColor: "#fff",
  },
  handle: {
    width: 64,
    height: 6,
    backgroundColor: "#E6ECEB",
    borderRadius: 4,
    alignSelf: "center",
    marginBottom: 12,
  },

  title: { fontSize: 20, fontWeight: "700", color: "#111", marginBottom: 14 },

  label: { color: "#9DA9A6", fontSize: 13, marginBottom: 8 },

  inputBox: {
    backgroundColor: "#F1F6F6",
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  pinSmall: { width: 16, height: 16, marginRight: 12 },
  inputText: { color: "#233634", fontSize: 15, flex: 1 },

  vehicleRow: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "space-between",
  },
  vehicleBox: {
    width: "30%",
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: "#F1F6F6",
    justifyContent: "center",
    alignItems: "center",
  },
  vehicleBoxActive: {
    backgroundColor: "#CFEFEF",
  },
  vehicleIcon: { width: 44, height: 44 },

  nextButton: {
    marginTop: 22,
    backgroundColor: "#0B6A66",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  nextText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});