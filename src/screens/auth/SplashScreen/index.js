import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  View,
  Text,
  Linking,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';
import Logo from '../../../assets/Logo/logo.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from '../../../components/AsyncStorage';
import { useDispatch } from 'react-redux';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import styles from './style';
import Modal from 'react-native-modal';
import axios from 'axios';
import { check, PERMISSIONS, RESULTS, request, openSettings } from 'react-native-permissions';

const windowWidth = Dimensions.get('window').width;
const Splash = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [androidUrl, setAndroidUrl] = useState('');
  const [iosUrl, setIosUrl] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {

    appVersion();

  }, []);

  useEffect(() => { getData() }, []);
  const getData = async () => {
    dispatch({
      type: 'Get_Store_Request',
      url: 'apiproduct/getstore',
    });
    dispatch({
      type: 'Privacy_Policy_Request1',
      url: 'api/privacy_policy',
    });
    dispatch({
      type: 'Home_Data_Request',
      url: 'home/mobileview',
    });
    dispatch({
      type: 'Menu_List_Request',
      url: 'apiproduct/menuSubmenuList',
    });
    // Platform.OS === 'android' ? requestLocationPermission() : null;

    await AsyncStorage.setItem(Storage.lat, '');
    await AsyncStorage.setItem(Storage.long, '');
  }

  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Bakery Store',
          message: 'Bakery Store App access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
      }
    } catch (err) {
      console.warn(err);
    }
  }
  const appVersion = async url => {
    try {

      const response = await axios({
        method: 'GET',
        headers: {
          'content-type': 'multipart/form-data',
          Accept: 'multipart/form-data',
        },
        url: 'https://craftsweb.co.in/food-delivery/upload/index.php?route=api/version',
      });

      if (Platform.OS == 'android') {
        if (response.data.android_version > 4) {
          setAndroidUrl(response.data.android_url);
          setModalVisible(true);
        } else {
          initial();
        }
      } else {
        if (response.data.ios_version > 1) {
          setIosUrl(response.data.ios_url);
          setModalVisible(true);
        } else {
          initial();
        }
      }
    } catch (error) {
      console.log(error)
      throw error;


    }
    console.log('this is callled')
  };
  const permisssionAndroid = async () => {

    const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    console.log('thtiuttiti', result)
    if (result === 'granted') {
      goTo()
    }
    else if (result === 'blocked') {
      Alert.alert(
        'Bakery Store needs To access the Location !',
        `\n Do you want to allow?`,
        [
          {
            text: 'Cancel',

            onPress: () => { goTo() },
            style: 'cancel'

          },
          {
            text: 'Open Settings',
            onPress: async () => {
              await openSettings()
              goTo()
            }

          },
        ],
      );
    }
    else {
      const res = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
      if (res === 'granted') {
        goTo()
      } else {
        goTo()
      }

    }

  }
  const permisssionIOS = async () => {

    const result = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
    if (result === 'granted') {
      goTo()
    }
    else if (result === 'blocked') {
      Alert.alert(
        'Bakery Store needs To access the Location !',
        `\Bakery Store app needs access to location for updating your location to Bakery Store team while submitting orders.`,
        [
          {
            text: 'Cancel',

            onPress: () => { goTo() },
            style: 'cancel'

          },
          {
            text: 'Open Settings',
            onPress: async () => {
              await openSettings()
              goTo()
            }
            ,


          },
        ],
      );
    }
    else {
      const res = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
      if (res === 'granted') {
        goTo()
      } else {
        goTo()
      }

    }

  }
  const initial = () => {
    Platform.OS === 'android' ? permisssionAndroid() : permisssionIOS()
    // goTo()
  }
  const goTo = async () => {
    const customer_id = await AsyncStorage.getItem(Storage.customer_id);
    if (customer_id) {
      setTimeout(
        () =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }],
          }),
        1500,
      );
      setModalVisible(false);
    } else {
      setTimeout(
        () =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          }),
        1500,
      );
      setModalVisible(false);
    }
  }



  const openUrl = () => {
    if (Platform.OS == 'android') {
      Linking.openURL(androidUrl);
    } else {
      Linking.openURL(iosUrl);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', justifyContent: 'center',flex:1  }}>
        {/* <Logo height={400} width={windowWidth} /> */}
        <Image style={{width:'100%',resizeMode:'center'}} source={require('../../../assets/Logo/baker.png')}/>
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modal}>
          <View style={{ width: '100%' }}>
            <Text
              style={{
                color: '#f68b1f',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {'New Update Available'}
            </Text>
          </View>
          {/* <TouchableOpacity style={styles.ModelmsgView}>
                    <Text style={styles.ModelMsgText}>{''}</Text>
                </TouchableOpacity> */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              marginTop: 10,
            }}>
            <TouchableOpacity style={styles.popup} onPress={() => openUrl()}>
              <Text style={styles.ModelBtntext}>Download Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Splash;
