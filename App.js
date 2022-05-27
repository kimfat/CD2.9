import React from "react";
import {StyleSheet,Text,View,ScrollView,ImageBackground,TouchableOpacity,ToastAndroid,Dimensions,Platform,ActionSheetIOS,Alert,} from "react-native";

const items = {
  items: ["Empire V","Iphuck 10","Transhumanism inc.","Непобедимое Солнце"],
  uri: ["https://media.b-stock.ru/gallery/390345.jpeg","https://online.globus.ru/upload/pim_images/541/351692.jpg","https://fkniga.ru/media/product/04/040410/KA-00374357.jpg","https://фантазеры.рф/wa-data/public/shop/products/67/22/42267/images/92476/92476.750x0.jpg", ],
};

export default class App extends React.Component {
  handlePlatform(text) {
    if (Platform.OS === "android") {
      this.handlePressAndroidToast(text);
    } else if (Platform.OS === "ios") {
      this.handlePressIOS(text);
    }
  }

  handlePressAndroidToast(text) {
    ToastAndroid.show(text + " точно хорошая книга", ToastAndroid.LONG);
  }

  handlePressIOS(text) {
    ActionSheetIOS.showActionSheetWithOptions(
  {
    options: ['похвалить', 'поругать'],
    rugan: 1,
    hvala: 0
  },
  (rugan) => {
    if (rugan === 1) {
      Alert.alert(text + " ' это хорошо");
    } else {
      Alert.alert(text + " ' это плохо");
    }
  }
);
  }

  render() {
    const renderItems = () => {
      return items["items"].map((item, id) => {
        return (
          <TouchableOpacity
            style={styles.item}
            key={id}
            onPress={() => this.handlePlatform(item)}
          >
            <ImageBackground
              style={styles.image}
              source={{ uri: items["uri"][id] }}
            />
            <Text style={styles.text}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      });
    };

    return (
      <View style={styles.container}>
        <ScrollView>{renderItems()}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:45,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 80,
    height: 120,
  },
  text:{
    fontFamily: ,
    fontSize: 18,
    marginStart: 20,
  }
});