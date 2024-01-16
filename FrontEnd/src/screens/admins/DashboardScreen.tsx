import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS } from "../../themes/theme";
import Logo from "../../components/Logo";
import GradientButton from "../../components/GradientButton";
import HomeScreen from "../HomeScreen";

const DashboardScreen = ({ navigation }: any) => {
  return (
    <View className="flex-1 bg-primaryBlackHex">
      <Logo />
      <View className="border border-primaryWhiteHex rounded-3xl w-96 h-96 mx-auto mt-10 p-3">
        <Text className="text-primaryWhiteHex text-size_30 mx-auto font-poppins_semibold">
          Dashboard
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="flex flex-row flex-wrap items-center justify-center">
            <TouchableOpacity
              onPress={() => navigation.navigate("Drink Manage")}
            >
              <GradientButton
                title="Drink Management"
                image={require("../../assets/icons/tea-cup.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Category Manage")}
            >
              <GradientButton
                title="Category Management"
                image={require("../../assets/icons/dashboard.png")}
              />
            </TouchableOpacity>
<<<<<<< Updated upstream
            <TouchableOpacity
              onPress={() => navigation.navigate("Statistic")}
            >
=======
            <TouchableOpacity>
>>>>>>> Stashed changes
              <GradientButton
                title="Statistic"
                image={require("../../assets/icons/signal.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <GradientButton
                title="Order Management"
                image={require("../../assets/icons/order.png")}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
