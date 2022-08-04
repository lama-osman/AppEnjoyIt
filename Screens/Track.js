import React, { useState,useCallback, useContext, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, RefreshControl , Image} from 'react-native'
import { Icon } from 'react-native-elements'
const IC_ARR_DOWN = require('../Images/ic_arr_down.png');
const IC_ARR_UP = require('../Images/ic_arr_up.png');
import DropDownItem from 'react-native-drop-down-item';
import { arr1 } from '../App';
import { ContextForItems } from '../Components/Context';

const Track = ({ route, navigation }) => {
  const [locationData, setLocationData] = useState('');
  const contextProp = useContext(ContextForItems);
  const [loading, setLoading] = useState(false);


  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    UDTract();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);



  const UDTract = (async () => {
    //onRefresh()
    await fetch("http://194.90.158.74/bgroup61/test2/tar5/api/Track?userId="+contextProp.user.userId,{
      method: "GET",
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    }).then(res => {
      console.log('TRACK status', res.status);
      console.log('TRACK ok', res.ok);

      return res.json();
    }).then(
      (result) => { setLocationData(result); console.log("result : ", result); setLoading(true); },
      (error) => { return null; })
  })













  useEffect(async () => {
    onRefresh()
    await fetch("http://194.90.158.74/bgroup61/test2/tar5/api/Track?userId="+contextProp.user.userId,{
      method: "GET",
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    }).then(res => {
      console.log('TRACK status', res.status);
      console.log('TRACK ok', res.ok);

      return res.json();
    }).then(
      (result) => { setLocationData(result); console.log("result : ", result); setLoading(true); },
      (error) => { return null; })
  }, []);


  console.log('data',locationData)
  const deleteTrack = (item, i) => {
    item.map((place) => {
      fetch("http://194.90.158.74/bgroup61/test2/tar5/api/Track?userId=" + contextProp.user.userId + "&trackName=" + place.trackName + "&trackDate=" + place.trackDate, {
        method: "Delete",
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        })
      }).then(res => {
        console.log('res status', res.status);
        console.log('res ok', res.ok);
        return res.json();
      }).then(
        (error) => { return null; })
    })
  
    setLocationData(locationData.filter((index) => index !== i));
  }

  const addBody = (i) => {
    return locationData[i][0].placeName + ' ' + locationData[i][0].placeTime + ' \n' +
      locationData[i][1].placeName + ' ' + locationData[i][1].placeTime + ' \n' +
      locationData[i][2].placeName + ' ' + locationData[i][2].placeTime + ' \n' +
      locationData[i][3].placeName + ' ' + locationData[i][3].placeTime + ' \n';
  }
  return (

    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

      <TouchableOpacity>

      <Text style={{ width: 30, height: 30, borderRadius: 180, borderColor: 'green', borderWidth: 2, marginTop: 10, marginLeft: 300 }}>
        <Icon name='add' onPress={() => navigation.replace("Home")} size={30} color={'green'}  ></Icon></Text>
        </TouchableOpacity>

      <ScrollView style={{ alignSelf: 'stretch' }}>
        {
          locationData
            ? locationData.map((param, i) => {
              return (
                <DropDownItem
                  key={i}
                  style={{ marginTop: 15, padding: 2 }}
                  contentVisible={false}
                  invisibleImage={IC_ARR_DOWN}
                  visibleImage={IC_ARR_UP}
                  header={
                    <View style={styles.header}>
                      <TouchableOpacity>
                        <Icon name="delete" color={'green'} size={23} onPress={() => deleteTrack(locationData[i], i)}></Icon>
                      </TouchableOpacity>
                      <Text style={{
                        fontSize: 18,
                        color: 'black', paddingLeft: 7
                      }}>{param[0].trackName}</Text>
                    </View>
                  }
                >
                  <Text style={[styles.txt,
                  { fontSize: 16, },]}>{addBody(i)}
                  </Text>
                  <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity>
                      <Icon name="edit" color="green" onPress={() =>
                        navigation.navigate('UpdateTrack', { paramKey: locationData[i], indexKey: i })} />
                    </TouchableOpacity>
                  </View>
                </DropDownItem>
              );
            })
            : null
        }
        <View />
      </ScrollView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //paddingTop:5,

  },
  header: {
    width: '100%',
    //paddingVertical: 8,
    //paddingHorizontal: 12,
    //flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4
  },
  headerTxt: {
    fontSize: 20,
    color: 'rgb(74,74,74)',
    marginRight: 60,
    //flexWrap: 'wrap',
  },
  txt: {
    fontSize: 14,
  },
});
export default Track;