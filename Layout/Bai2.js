import {
  Animated,
  FlatList,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef } from "react";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Bai2 = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }) => {
    const inputRange = [0, index * 60, (index + 1) * 120];

    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [1, 0.5, 0],
    });

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 0.85, 0],
    });

    return (
      <Animated.View style={{ opacity, transform: [{ scale }] }}>
        <Text style={styles.item}></Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <AnimatedFlatList
        showsVerticalScrollIndicator={false}
        data={Array.from({ length: 14 })}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
};

export default Bai2;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    borderRadius: 12,
    width: 300,
    padding: 20,
    marginVertical: 10,
    backgroundColor: `black`,
  },
});
