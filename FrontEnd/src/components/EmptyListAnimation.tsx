import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { COLORS } from "../themes/theme";
import { FONTFAMILY, FONTSIZE } from "../themes/font";

interface EmptyListAnimationProps {
  title: string;
}

const EmptyListAnimation: React.FC<EmptyListAnimationProps> = ({ title }) => {
  return (
    <View style={styles.EmptyCartContainer}>
      {/* <LottieView
        style={styles.LottieStyle}
        source={require("../lotties/coffeecup.json")}
        autoPlay
        loop
      /> */}
      <Image
        style={styles.ImageStyle}
        source={require("../assets/coffee_assets/EmptyList.png")}
      />
      <Text style={styles.LottieText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  EmptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageStyle: {
    height: 150,
    width: 150,
    marginVertical: 40,
  },
  LottieText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
    textAlign: "center",
  },
});

export default EmptyListAnimation;
