import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as Contacts from "expo-contacts";

export default function DetailScreen({ route, navigation }) {
  const data = route.params.item;

  let number = () => {
    if (data.phoneNumbers != undefined) {
      return data.phoneNumbers[0].number;
    } else {
      return "Tidak Ada Nomer";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ position: "absolute", left: 20 }}
          onPress={() => navigation.navigate("Home")}
        >
          <AntDesign name="arrowleft" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Detail</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.garisIcon}>
          <FontAwesome5 name="user-alt" size={50} color="white" />

          <TouchableOpacity style={styles.cameraStyle}>
            <Ionicons name="md-camera" size={24} color="#454545" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.boxIcon}>
        <TouchableOpacity
          style={[styles.garisIcon2, { paddingHorizontal: 10 }]}
        >
          <Foundation name="telephone" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.garisIcon2}>
          <Entypo name="mail" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.garisIcon2, styles.whatsapp]}>
          <FontAwesome5
            name="whatsapp"
            size={24}
            color="white"
            onPress={() => {
              Linking.openURL("https://wa.me/" + data.nomor + "/");
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.boxInfo}>
          <Text style={styles.textInfoBold}>Nama</Text>
          <Text style={styles.textInfoBiasa}>{data.name}</Text>
        </View>

        <View style={styles.boxInfo}>
          <Text style={styles.textInfoBold}>Nomor</Text>
          <Text style={styles.textInfoBiasa}>{number()}</Text>
        </View>

        <View style={styles.boxInfo}>
          <Text style={styles.textInfoBold}>Info</Text>
          <Text style={styles.textInfoBiasa}>{data.contactType}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#f23636" }]}
        onPress={() => {
          // const hapus = Contacts.removeContactAsync({ contactId: data.id });
          // navigation.navigate("Home");
        }}
      >
        <Text style={[styles.textButton, { color: "#FFF" }]}>Hapus</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: "#F5F5F5", borderWidth: 0.5 },
        ]}
      >
        <Text style={styles.textButton}>Ubah</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: "white",
  },
  header: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#87CEFA",
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1.5,
    color: "#454545",
  },
  box: {
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  garisIcon: {
    borderWidth: 1,
    padding: 30,
    borderRadius: 80,
    backgroundColor: "#454545",
  },
  button: {
    alignItems: "center",
    padding: 15,
    paddingVertical: 8,
    marginHorizontal: 20,
    marginVertical: 8,
  },
  textButton: {
    fontSize: 15,
    fontWeight: "bold",
  },
  cameraStyle: {
    position: "absolute",
    backgroundColor: "#87CEFA",
    padding: 8,
    borderRadius: 20,
    top: 70,
    left: 75,
  },
  boxIcon: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "space-evenly",
  },
  garisIcon2: {
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 50,
  },
  containerInfo: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  textInfoBold: {
    fontWeight: "bold",
    fontSize: 16,
    backgroundColor: "#Ececec",
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  textInfoBiasa: {
    backgroundColor: "#F5F5F5",
    fontSize: 14,
    paddingLeft: 30,
    paddingVertical: 8,
  },
  boxInfo: {
    marginVertical: 10,
  },
  whatsapp: {
    borderWidth: 0,
    paddingHorizontal: 9,
    backgroundColor: "#128117",
  },
});
