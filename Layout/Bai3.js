import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Bai3 = () => {
  const [Visible, setVisible] = useState(false);
  const animaatedValueY = useRef(new Animated.Value(300)).current;
  const animationheight = useRef(new Animated.Value(50)).current;
  const animaatedOpacity = useRef(new Animated.Value(1)).current;

  const animation = () => {
    setVisible(!Visible);
  };

  useEffect(() => {
    Animated.timing(animaatedValueY, {
      toValue: 100,
      duration: 3500,
      useNativeDriver: false,
    }).start();
    Animated.timing(animaatedOpacity, {
      toValue: 0,
      duration: 3500,
      useNativeDriver: false,
    }).start();
    Animated.timing(animationheight, {
      toValue: 0,
      duration: 3500,
      useNativeDriver: false,
    }).start();
  }, [animaatedValueY, animaatedOpacity, animationheight]);

  return (
    <View style={{ height: "100%" }}>
      {Visible ? (
        <Animated.View style={[styles.header, { height: animaatedValueY }]}>
          <Animated.View
            style={[{ height: animationheight, opacity: animaatedOpacity }]}
          >
            <Image
              style={{ width: 50, height: 50, borderRadius: 5 }}
              source={{
                uri: "https://i.pinimg.com/564x/fe/e6/99/fee6998be4c13f67e189728cfd515fc5.jpg",
              }}
            />
          </Animated.View>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Text
                style={{
                  marginRight: 20,
                  padding: 7,
                  borderRadius: 10,
                  borderWidth: 1,
                  color: "green",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Popular
              </Text>
              <Text style={{ marginRight: 20, padding: 7 }}>
                Product Design
              </Text>
              <Text style={{ marginRight: 20, padding: 7 }}>Development</Text>
              <Text style={{ padding: 7 }}>Project File</Text>
            </ScrollView>
          </View>
        </Animated.View>
      ) : (
        <View style={[styles.header]}>
          <TouchableOpacity onPress={() => animation()}>
            <Image
              style={{ width: 60, height: 60, borderRadius: 10, marginTop: 80 }}
              source={{
                uri: "https://i.pinimg.com/564x/fe/e6/99/fee6998be4c13f67e189728cfd515fc5.jpg",
              }}
            />
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Mornin' Mark! {"\n"}Ready for a quiz?
            </Text>
          </TouchableOpacity>

          <View style={styles.container}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Text
                style={{
                  marginRight: 20,
                  padding: 7,
                  borderRadius: 10,
                  borderWidth: 1,
                  color: "green",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Popular
              </Text>
              <Text style={{ marginRight: 20, padding: 7 }}>
                Product Design
              </Text>
              <Text style={{ marginRight: 20, padding: 7 }}>Development</Text>
              <Text style={{ padding: 7 }}>Project File</Text>
            </ScrollView>
          </View>
        </View>
      )}

      <FlatList
      showsVerticalScrollIndicator={false}
        data={Array.from({ length: 5 })}
        renderItem={({ item, index }) => (
          <View
            style={{
              marginVertical: 12,
              gap: 10,
              padding: 23,
              backgroundColor: "gray",
              marginHorizontal: 20,
              borderRadius: 15,
            }}
          >
            <Text style={{ fontSize: 15 }}>CRO102-MD18309</Text>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Design system{" "}
            </Text>
            <View style={styles.image}>
              <Image
                style={{ width: 30, height: 30, borderRadius: 10 }}
                source={{
                  uri: "https://i.pinimg.com/564x/f0/92/96/f09296757ac9d495532c34304d05bfdf.jpg",
                }}
              />
              <Text style={{ marginVertical: 6, marginLeft: 10 }}>Nam Khánh</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
  },
  header: {
    height: 300,
    backgroundColor: "yellow",
    justifyContent: "center",
    overflow: "visible",
    padding: 20,
  },
  scrollViewContent: {
    paddingTop: 5,
    height: 750,
  },
  listHeader: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  
  fixedText: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "lightblue",
    fontSize: 16,
    paddingLeft: 20,
  },
  image: {
    flexDirection: "row",
  },
});

export default Bai3;
