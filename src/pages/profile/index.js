import { ScrollView, StyleSheet, View } from "react-native";
import ProfileNavBar from "../../components/navBarProfile";
import ProfileHeader from "../../components/headerProfile";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileNavBar />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ProfileHeader />
        {'@ikmal☠️'}
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  scrollViewContent: {
    padding: 20,
    paddingBottom: 50,
  },
});
