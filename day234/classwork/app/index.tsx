import React from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.layout}>
      <View style={[styles.box, { backgroundColor: "black", borderRadius: 0, width: 200, height: 450 }]}>
        <View style={[styles.box, { backgroundColor: "red", margin: 25 }]}  />
        <View style={[styles.box, { backgroundColor: "yellow", margin: 25 }]}  />
        <View style={[styles.box, { backgroundColor: "green", margin: 25 }]}  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

// StyleSheet-ს ჩვენ იმიტომ ვიყენებთ რომ კოდის წერა გაგვიმარტივდეს, ამითი ჩვენ აღარ მოგვიწევს რომ ახლიდან დაუწეროთ რამე თაგს სულ ერთი და იგივე სტილი, შეგვიძლია StyleSheet-ის გამოყენებით შევამოკლოთ კოდი, ასევე თუ რამეს დამატებაც გვინდა მარტო ერთ თაგზე ეგეც შეგვიძლია