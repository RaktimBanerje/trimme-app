import { Image, Text } from '@rneui/base';
import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from '@rneui/base';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import axios from '../../utils';
import { StoreContext } from '../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RefreshControl } from 'react-native';
import { Feather } from '@expo/vector-icons';


const ProfileScreen = ({navigation}) => {

  const {state, setState} = React.useContext(StoreContext)
  const [user, setUser]  = React.useState(null)

  const logout = () => {
      axios.get("/user/logout")
      .then(response => {
        AsyncStorage.removeItem("user")
        AsyncStorage.removeItem("token")
        if(response.status === 200) {
            setState(state => ({...state, token: null, user: null}))
            navigation.navigate("EmailLogin")
        }
      })
  }

  const loadData = () => {
    axios.get("/user/is-authenticate")
    .then(response => {
      if(response.status == 200) {
        setUser(response.data.user)
      }
    })
    .catch(console.log)
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadData()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  React.useEffect(() => {
    loadData()
  }, [])

  const deleteMyAccount = () => {
    Alert.alert(  
      '',
      'Are you sure ?',  
      [  
          {  
              text: 'Cancel',  
              onPress: () => console.log('Cancel Pressed'),  
              style: 'cancel',  
          },  
          {text: 'OK', onPress: () =>  {
            axios.get("/user/delete-my-account")
            .then(response => {
              AsyncStorage.removeItem("user")
              AsyncStorage.removeItem("token")
              if(response.status === 200) {
                  setState(state => ({...state, token: null, user: null}))
                  navigation.navigate("EmailLogin")
              }
            })
            .catch(console.log)
          }},  
      ]  
  );  
  }

  return (
   <SafeAreaView style={{flex: 1}} forceInset={{top: 'alaways'}}>
      <View style={styles.container}>
          <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
          >
          <View style={styles.imageContainer}>
            <Avatar 
              size={100}
              rounded
              source={{ uri: `https://digitalplutform.com/trimme/storage/app/${user?.image}` }}
            />
          </View>
          <View>
              <TouchableOpacity style={styles.itemContainer} activeOpacity={1}>
                  <View style={styles.itemContainerFirstElement}>
                  <AntDesign name="edit" size={24} color="black" />
                  <Text style={{fontSize: 18, paddingHorizontal: 20}}>Edit Profile</Text>
                  </View>
      
                  <AntDesign name="arrowright" size={24} color="black" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.itemContainer} activeOpacity={1}>
                  <View style={styles.itemContainerFirstElement}>
                  <Ionicons name="notifications-outline" size={24} color="black" />
                  <Text style={{fontSize: 18, paddingHorizontal: 20}}>Notification</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.itemContainer} activeOpacity={1}>
                  <View style={styles.itemContainerFirstElement}>
                  <AntDesign name="exclamation" size={24} color="black" />
                  <Text style={{fontSize: 18, paddingHorizontal: 20}}>Privacy Policies</Text>
                  </View>
      
              </TouchableOpacity>

              <TouchableOpacity style={styles.itemContainer} activeOpacity={1}>
                  <View style={styles.itemContainerFirstElement}>
                  <Ionicons name="help" size={24} color="black" />
                  <Text style={{fontSize: 18, paddingHorizontal: 20}}>Help Center</Text>
                  </View>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.itemContainer} activeOpacity={1} onPress={logout}>
                  <View style={styles.itemContainerFirstElement}>
                  <AntDesign name="logout" size={24} color="black" />
                  <Text style={{fontSize: 18, paddingHorizontal: 20}}>Log out</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.itemContainer} activeOpacity={1} onPress={() => deleteMyAccount()}>
                <View style={styles.itemContainerFirstElement} activeOpacity={1}>
                  <Feather name="trash-2" size={24} color="black" />
                  <Text style={{fontSize: 18, paddingHorizontal: 20, color: "red"}}>Delete My Account</Text>
                </View>
              </TouchableOpacity>
          </View>
          </ScrollView>
      </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: "#fff",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  avatar: {
    height: 40,
    width: 40
  },
  itemContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: 'grey',
    borderRadius: 100,
    borderWidth: 0.5
  },
  itemContainerFirstElement: {
    flexDirection: 'row',
    alignItems: "center"
  }
})

export default ProfileScreen