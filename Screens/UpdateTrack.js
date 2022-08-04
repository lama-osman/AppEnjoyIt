import React, { useState, useContext } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Picker, Button } from 'react-native';
import { LocationData } from '../data/allLocations'
import { Icon } from 'react-native-elements'
import { ContextForItems } from '../Components/Context';

const UpdateTrack = ({ route, navigation }) => {

  const [selectedValue, setSelectedValue] = useState("");
  const contextProp = useContext(ContextForItems);
  let locationsToFetch = [];

  const onAdd = () => {

    const item = {
      OneLocation, twoLocation, threeLocation, fourLocation
      , OneHour, twoHour, threeHour, fourHour, NameTrack, selectData
    };

    item.OneLocation = OneLocation;
    item.twoLocation = twoLocation;
    item.threeLocation = threeLocation;
    item.fourLocation = fourLocation;

    item.OneHour = OneHour;
    item.twoHour = twoHour;
    item.threeHour = threeHour;
    item.fourHour = fourHour;

    item.NameTrack = NameTrack;
    item.selectData = selectData;

    const place1 = {
      userId: contextProp.user.userId,
      placeId: locations[0].placeId,
      trackName: locations[0].trackName,
      trackDate: "10/08/2018",
      placeName: locations[0].placeName,
      placeTime: item.OneHour

    }
    const place2 = {
      userId: contextProp.user.userId,
      placeId: locations[1].placeId,
      trackName: locations[1].trackName,
      trackDate: "10/08/2018",
      placeName: locations[1].placeName,
      placeTime: item.twoHour

    }
    const place3 = {
      userId: contextProp.user.userId,
      placeId: locations[2].placeId,
      trackName: locations[2].trackName,
      trackDate: "10/08/2018",
      placeName: locations[2].placeName,
      placeTime: item.threeHour

    }
    const place4 = {
      userId: contextProp.user.userId,
      placeId: locations[3].placeId,
      trackName: locations[3].trackName,
      trackDate: "10/08/2018",
      placeName: locations[3].placeName,
      placeTime: item.fourHour

    }
    UpdateT(place1);
    UpdateT(place2);
    UpdateT(place3);
    UpdateT(place4);

    console.log("locations To Fetch : ", locations[3].trackName);

    LocationData.pop(0)
    LocationData.push(item);
    navigation.navigate('Home');//new arr 

  }

  const UpdateT = (item) => {
    console.log("item at fetch : ",item);
    fetch('http://194.90.158.74/bgroup61/test2/tar5/api/Track', {
      method: 'PUT',
      body: JSON.stringify(item),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    }).then(res => {
      console.log('res status', res.status);
      console.log('res ok', res.ok);
    }).then(
      (error) => { return null; })

  }

  const [Time, setTime] = useState(new Date());
  const locations = route.params.paramKey;
  //ArryFromMinToMax(locations);
  //LocationData.push(locations);

  const { paramKey, indexKey } = route.params;

  const [OneHour, setOneHour] = useState(locations[0].placeTime);
  const [OneLocation, setOneLocation] = useState(locations[0].placeName);
  const [twoLocation, setTwoLocation] = useState(locations[1].placeName);
  const [twoHour, settwoHour] = useState(locations[1].placeTime);
  const [threeLocation, setThreeLocation] = useState(locations[2].placeName);
  const [threeHour, setthreeHour] = useState(locations[2].placeTime);
  const [fourLocation, setFourLocation] = useState(locations[3].placeName);
  const [fourHour, setfourHour] = useState(locations[3].placeTime);
  const [date, setData] = useState(new Date());
  const [selectData, setselectData] = useState(new Date());
  const [icon1, setIcon1] = useState('warning');
  const [icon2, setIcon2] = useState('warning');
  const [icon3, setIcon3] = useState('warning');
  const [icon4, setIcon4] = useState('warning');





  const [NameTrack, onChangeNameTrack] = React.useState(locations[0].trackName);
  const [isTimePickerVisibleFour, setisTimePickerVisibleFour] = useState(false);
  const [isTimePickerVisibleOne, setisTimePickerVisibleOne] = useState(false);
  const [isTimePickerVisibleTwo, setisTimePickerVisibleTwo] = useState(false);
  const [isTimePickerVisibleThree, setisTimePickerVisibleThree] = useState(false);


  const [HL1, setHL1] = useState();
  const [HL2, setHL2] = useState();
  const [HL3, setHL3] = useState();
  const [HL4, setHL4] = useState();


  const showTimePickerFour = () => { setisTimePickerVisibleFour(true); };
  const showTimePickerOne = () => { setisTimePickerVisibleOne(true); };
  const showTimePickerTwo = () => { setisTimePickerVisibleTwo(true); };
  const showTimePickerThree = () => { setisTimePickerVisibleThree(true); };

  const hideTimePickerFour = () => { setisTimePickerVisibleFour(false); };
  const hideTimePickerOne = () => { setisTimePickerVisibleOne(false); };
  const hideTimePickerTwo = () => { setisTimePickerVisibleTwo(false); };
  const hideTimePickerThree = () => { setisTimePickerVisibleThree(false); };

  const CheckHours = (H1, H2) => {
    console.log('Check Hours ' + H1 + ' ' + H2);
    if (H1 == H2) { return true; } else { return false; }
  }

  const CheckHoursAfter = (l1, l2) => {
    console.log('Check Hours after ' + l1 + ' ' + l2);

    if (l1 >= l2) { return true; } else { return false; }
  }

  const onChangeFour = (event, selectedDate) => {
    hideTimePickerFour();
    const currentDate = selectedDate || data;
    let tempDate = new Date(currentDate);
    let hourf = `${(tempDate.getHours())}` + ':' + `${(tempDate.getMinutes())}`;
    setHL4(tempDate.getHours());
    setfourHour(hourf);
    console.log(hourf);
    if (CheckHoursAfter(HL3, tempDate.getHours())) { alert('Please select another houres'); setfourHour("0000"); }
    if (CheckHours(twoHour, hourf)) {
      alert('Please select another houres');
      setfourHour("0000");
    } else if (CheckHours(OneHour, hourf)) {
      alert('Please select another houres');
      setfourHour("0000");
    } else if (CheckHours(threeHour, hourf)) {
      alert('Please select another houres');
      setfourHour("0000");
      setIcon4('done');

    }
    setIcon4('done');

  }


  const onChangOne = (event, selectedDate) => {
    hideTimePickerOne();
    const currentDate = selectedDate || data;
    let tempDate = new Date(currentDate);
    setHL1(tempDate.getHours());
    let hourOne = `${(tempDate.getHours())}` + ':' + `${(tempDate.getMinutes())}`;
    setOneHour(hourOne);
    console.log(hourOne);
    setIcon1('done');

  }

  const onChangeTwo = (event, selectedDate) => {
    hideTimePickerTwo();
    const currentDate = selectedDate || data;
    let tempDate = new Date(currentDate);
    setHL2(tempDate.getHours());
    let hourTwo = `${(tempDate.getHours())}` + ':' + `${(tempDate.getMinutes())}`;
    settwoHour(hourTwo);
    console.log(hourTwo);
    if (CheckHoursAfter(HL1, tempDate.getHours())) { alert('Please select another houres'); settwoHour("00"); }
    setIcon2('done');

  }
  const onChangeThree = (event, selectedDate) => {
    hideTimePickerThree();
    const currentDate = selectedDate || data;
    let tempDate = new Date(currentDate);
    let hourThree = `${(tempDate.getHours())}` + ':' + `${(tempDate.getMinutes())}`;
    setthreeHour(hourThree);
    setHL3(tempDate.getHours());
    console.log(hourThree);
    setIcon3('done');

  }

  const ShowOpenClose = (Location) => {
    if (Location.opening_hours) {
      alert('Open at ' + Location.opening_hours.days.mon.start.hour + ':' +
        Location.opening_hours.days.mon.start.minute)
    } else { alert('Open at 24h'); }
  }

  function getClucHoures(lat1, lat2, lng1, lng2) {

    var dLat = lat2 - lat2;
    var dLon = lng2 - lng1;
    var dPhi = Math.log(Math.tan(lat2 / 2 + Math.PI / 4) / Math.tan(lat1 / 2 + Math.PI / 4));
    var q = (Math.abs(dLat) > 0) ? dLat / dPhi : Math.cos(lat1);
    if (dLon < 0) dLon = dLon * -1;
    if (dLon > Math.PI) {
      dLon = dLon > 0 ? -(2 * Math.PI - dLon) : (2 * Math.PI + dLon);
    }
    var brng = ToDegree(Math.atan2(dLon, dPhi));
    return brng / 60;
  }


  function ToDegree(val) { return val * 180 / Math.PI; }

  const checkOpenTravel = (Loc1, Loc2, hour) => {
    var decH = getClucHoures(Loc1.coordinates.latitude,
      Loc2.coordinates.latitude,
      Loc1.coordinates.longitude,
      Loc2.coordinates.longitude);

    if (Loc2.opening_hours === null) return true;
    else if (Loc2.opening_hours.days.mon.end.hour < hour + decH) return true;
    else return true;
  }


  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.sectionTitle} >Update Travel! </Text></View>

      <View style={styles.round}>
        <TextInput style={styles.input} onChangeText={onChangeNameTrack} value={NameTrack} />
        <View style={{}}>
          <DatePicker style={{ width: 150 }}
            date={date}
            placeholder={selectData}
            format='YYYY/MM/DD'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            placeholderTextColor='red'
            onDateChange={(d) => setselectData(d)} />
        </View>
      </View>


      <View style={styles.round}>
        <Picker
          mode='dropdown'
          style={{ height: 50, width: 200 }}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setOneLocation(itemValue)}>
          <Picker.Item label={OneLocation} value={OneLocation} />

        </Picker>
        <Button title="Hour" onPress={showTimePickerOne} />
        {isTimePickerVisibleOne && <DateTimePicker
          mode="time"
          value={Time}
          backgroundColor="green"
          onCancel={hideTimePickerOne}
          locale="en_EN"
          is24Hour={true}
          onChange={onChangOne}
          headerTextIOS="Choose the hour"
        />}
        <Text>{OneHour}</Text>
        <TouchableOpacity >
          <Icon name="timer" color="black" />
        </TouchableOpacity>

        <TouchableOpacity >
          <Icon name={icon1} color="black" />
        </TouchableOpacity>

      </View>

      <View style={styles.round}>
        <Picker
          mode='dropdown'
          style={{ height: 50, width: 200 }}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setTwoLocation(itemValue)}>
          <Picker.Item label={twoLocation} value={twoLocation} />

        </Picker>
        <Button title="Hour" onPress={showTimePickerTwo} />
        {isTimePickerVisibleTwo && <DateTimePicker
          mode="time"
          value={Time}
          onCancel={hideTimePickerTwo}
          locale="en_EN"
          is24Hour={true}
          onChange={onChangeTwo}
          headerTextIOS="Choose the hour"
        />}
        <Text>{twoHour}</Text>
        <TouchableOpacity >
          <Icon name="timer" color="black" />
        </TouchableOpacity>

        <TouchableOpacity >
          <Icon name={icon2} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.round}>
        <Picker
          mode='dropdown'
          style={{ height: 50, width: 200 }}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setThreeLocation(itemValue)}>
          <Picker.Item label={threeLocation} value={threeLocation} />


        </Picker>
        <Button title="Hour" onPress={showTimePickerThree} />
        {isTimePickerVisibleThree && <DateTimePicker
          mode="time"
          value={Time}
          onCancel={hideTimePickerThree}
          locale="en_EN"
          is24Hour={true}
          onChange={onChangeThree}
          headerTextIOS="Choose the hour"
        />}
        <Text>{threeHour}</Text>
        <TouchableOpacity >
          <Icon name="timer" color="black" />
        </TouchableOpacity>

        <Icon name={icon3} color="black" />
      </View>

      <View style={styles.round}>
        <Picker
          mode='dropdown'
          style={{ height: 50, width: 200 }}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setFourLocation(itemValue)}>
          <Picker.Item label={fourLocation} value={fourLocation} />

        </Picker>
        <Button title="Hour" onPress={showTimePickerFour} />
        {isTimePickerVisibleFour && <DateTimePicker
          mode="time"
          value={Time}
          is24Hour={true}

          onCancel={hideTimePickerFour}
          locale="en_EN"
          onChange={onChangeFour}
          headerTextIOS="Choose the hour"
        />}
        <Text>{fourHour}</Text>
        <TouchableOpacity >
          <Icon name="timer" color="black" />
        </TouchableOpacity>
        <TouchableOpacity >
          <Icon name={icon4} color="black" />
        </TouchableOpacity>

      </View>
      <TouchableOpacity >
        <Button style={styles.button} title="Save" onPress={onAdd}>
        </Button>
      </TouchableOpacity>
    </View>

  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 180,
    margin: 12,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  round: {
    paddingTop: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    marginTop: 30,
    width: 100,
    height: 50,
    right: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .8,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center'
  },
  container: {
    paddingTop: 60,
    backgroundColor: 'white'
  },
});
export default UpdateTrack;