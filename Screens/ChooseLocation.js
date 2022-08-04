import React, {  useContext, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker';
import {ImageBackground, View, Text, StyleSheet,TouchableOpacity,TextInput ,Picker,Button} from 'react-native';
import { LocationData } from '../data/allLocations'
import { Icon } from 'react-native-elements'
import image from '../Images/pgk.png';
import { ContextForItems } from '../Components/Context';

const ChooseLocation = ({ route ,navigation}) => {
  let Newlocations = [];
 let locationsToFetch=[];
const [selectedValue, setSelectedValue] = useState("");

const onAdd = (async() => {
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
    placeId: locations[0].id,
    trackName: item.NameTrack,
    trackDate: "03/08/2022",
    placeName: locations[0].name,
    placeTime: item.OneHour

  }
  const place2 = {
    userId: contextProp.user.userId,
    placeId: locations[1].id,
    trackName: item.NameTrack,
    trackDate: "03/08/2022",
    placeName: locations[1].name,
    placeTime: item.twoHour

  }
  const place3 = {
    userId: contextProp.user.userId,
    placeId: locations[2].id,
    trackName: item.NameTrack,
    trackDate: "03/08/2022",
    placeName: locations[2].name,
    placeTime: item.threeHour

  }
  const place4 = {
    userId: contextProp.user.userId,
    placeId: locations[3].id,
    trackName: item.NameTrack,
    trackDate: "03/08/2022",
    placeName: locations[3].name,
    placeTime: item.fourHour

  }

 console.log("Place " , place4)

  const response = await fetch('http://194.90.158.74/bgroup61/test2/tar5/api/Track', {
    method: 'Post',
    body: JSON.stringify(place1),
    headers: new Headers({
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json; charset=UTF-8'
    })
  })

  const response1 = await fetch('http://194.90.158.74/bgroup61/test2/tar5/api/Track', {
    method: 'Post',
    body: JSON.stringify(place2),
    headers: new Headers({
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json; charset=UTF-8'
    })
  })  
  
  const response2 = await fetch('http://194.90.158.74/bgroup61/test2/tar5/api/Track', {
    method: 'Post',
    body: JSON.stringify(place3),
    headers: new Headers({
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json; charset=UTF-8'
    })
  })  
  
  const response3 = await fetch('http://194.90.158.74/bgroup61/test2/tar5/api/Track', {
    method: 'Post',
    body: JSON.stringify(place4),
    headers: new Headers({
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json; charset=UTF-8'
    })
  })

   await response.json();
   await response1.json();
  await response2.json();
  await response3.json();

  navigation.navigate('Track');
})

    const [Time, setTime] = useState(new Date());
    let locations = route.params.paramKey;
    ArryFromMinToMax(locations);

      const contextProp=useContext(ContextForItems);
    //const Newloca= ArryFromMinToMax(Newlocations,locations) ;
    const [OneHour, setOneHour]  = useState('n1');
    const [OneLocation, setOneLocation] = useState();
    const [twoLocation, setTwoLocation] = useState('');
    const [twoHour, settwoHour] = useState('n2');
    const [threeLocation, setThreeLocation] = useState('');
    const [threeHour, setthreeHour] = useState('n3');
    const [fourLocation, setFourLocation] = useState('');
    const [fourHour, setfourHour] = useState('n4');
    const [date, setData] = useState(new Date());
    const [selectData, setselectData] = useState(new Date());
    const [icon1, setIcon1] = useState('warning');
    const [icon2, setIcon2] = useState('warning');
    const [icon3, setIcon3] = useState('warning');
    const [icon4, setIcon4] = useState('warning');

    
    const [NameTrack, onChangeNameTrack] = React.useState("Name Track");
    const [isTimePickerVisibleFour, setisTimePickerVisibleFour] = useState(false);
    const [isTimePickerVisibleOne, setisTimePickerVisibleOne] = useState(false);
    const [isTimePickerVisibleTwo, setisTimePickerVisibleTwo] = useState(false);
    const [isTimePickerVisibleThree, setisTimePickerVisibleThree] = useState(false);


    const[isDatePickerVisible,setisDatePickerVisible]= useState(false);

    const [HL1, setHL1] = useState();
    const [HL2, setHL2] = useState();
    const [HL3, setHL3] = useState();
    const [HL4, setHL4] = useState();


    const showTimePickerFour = () => {setisTimePickerVisibleFour(true);};
    const showTimePickerOne = () => {setisTimePickerVisibleOne(true);};
    const showTimePickerTwo = () => {setisTimePickerVisibleTwo(true);};
    const showTimePickerThree = () => {setisTimePickerVisibleThree(true);};
    const showDatePicker= () => {setisDatePickerVisible(true);};

    const hideTimePickerFour = () => {setisTimePickerVisibleFour(false);};
    const hideTimePickerOne = () => {setisTimePickerVisibleOne(false);};
    const hideTimePickerTwo = () => {setisTimePickerVisibleTwo(false);};
    const hideTimePickerThree = () => {setisTimePickerVisibleThree(false);};
    const hideDatePicker= () => {setisDatePickerVisible(false);};


    const CheckHours = (H1,H2) => {
      console.log('Check Hours ' + H1 + ' ' + H2);
      if(H1 == H2 ) { return true;} else {return false;}    
    }

    const CheckHoursAfter = (l1,l2) => {
      console.log('Check Hours after ' + l1 + ' ' + l2);

      if(l1 >= l2 ) { return true;} else {return false;}  
    }
    const PostTo = (async(item) => {
      console.log(item);
      await fetch('http://194.90.158.74/bgroup61/test2/tar5/api/Track', {
        method: 'Post',
        body: JSON.stringify(item),
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        })
      }).then(res => {
        console.log('res status', res.status);
        console.log('res ok', res.ok);
        console.log('res ', res.json());

        return res.json();

      }).then(
        (error) => { return null; })
    })



   


  const onChangeFour = ( event, selectedDate) =>{
      hideTimePickerFour();
      const currentDate =selectedDate || data;
      let tempDate = new Date(currentDate);
      let hourf =`${(tempDate.getHours())}`+ ':'+ `${(tempDate.getMinutes())}`;
      setHL4(tempDate.getHours());
      setfourHour(hourf);
      console.log(hourf);
      if(CheckHoursAfter(HL3,tempDate.getHours())){alert('Please select another houres');setfourHour("0000");}       
      if(CheckHours(twoHour,hourf)){
        alert('Please select another houres');
        setfourHour("0000");
      }else if(CheckHours(OneHour,hourf)) {
       alert('Please select another houres');
       setfourHour("0000");
      }else if(CheckHours(threeHour,hourf)) {
      alert('Please select another houres');
      setfourHour("0000");
     }else if((checkOpenTravel(Newlocations[2],Newlocations[3],tempDate.getHours())))alert('Please select another houres its closed !');
     else setIcon4('done');

  }
  

  const onChangOne = (event, selectedDate) =>{
    console.log("Location Lat : "+locations[0].coordinates.latitude);
    hideTimePickerOne();
    const currentDate =selectedDate || data;
    let tempDate = new Date(currentDate);
    setHL1(tempDate.getHours());
    let hourOne =`${(tempDate.getHours())}`+ ':'+ `${(tempDate.getMinutes())}`;
    setOneHour(hourOne);
    console.log(hourOne);
    setIcon1('done');
    setOneLocation(Newlocations[0].name);
    setTwoLocation(Newlocations[1].name);
    setThreeLocation(Newlocations[2].name);
    setFourLocation(Newlocations[3].name);
  }
  
function ArryFromMinToMax (Loca){
  const Newl = [];
  const numbers = [];
  let minL1 = getClucHoures(
    Loca[0].coordinates.latitude,
    Loca[1].coordinates.latitude,
    Loca[0].coordinates.longitude,
    Loca[1].coordinates.longitude
    );
    let minL2 = getClucHoures(
      Loca[0].coordinates.latitude,
      Loca[2].coordinates.latitude,
      Loca[0].coordinates.longitude,
      Loca[2].coordinates.longitude
    );
    let minL3 = getClucHoures(
      Loca[0].coordinates.latitude,
      Loca[3].coordinates.latitude,
      Loca[0].coordinates.longitude,
      Loca[3].coordinates.longitude
    );
    numbers.push(minL1);numbers.push(minL2);numbers.push(minL3);

    let lowestToHighest = numbers.sort((a, b) => a - b);

    console.log(lowestToHighest)

    Newl.push(Loca[0]);
    for(let i =0;i<lowestToHighest.length;i++) {
      if(lowestToHighest[i]==minL1)Newl.push(Loca[1])
      if(lowestToHighest[i]==minL2)Newl.push(Loca[2])
      if(lowestToHighest[i]==minL3)Newl.push(Loca[3])
    }

  console.log(" "+ minL1 +  " " + minL2 + " " + minL3 + " New Location 1 : "+ 
  Newl[0].name +" ,"+ Loca[0].name+", 2 "+Newl[1].name +", "+ Loca[1].name
   +" 3 "+Newl[2].name +", "+ Loca[2].name+" 4 "+ Newl[3].name +", "+ Loca[3].name);
   Newlocations = Newl;
  return Newl;
}


  const onChangeTwo = ( event, selectedDate) =>{
      hideTimePickerTwo();
      const currentDate =selectedDate || data;
      let tempDate = new Date(currentDate);
      setHL2(tempDate.getHours());
      let hourTwo =`${(tempDate.getHours())}`+ ':'+ `${(tempDate.getMinutes())}`;
      settwoHour(hourTwo);
      console.log(hourTwo);
    if(CheckHoursAfter(HL1,tempDate.getHours())){alert('Please select another houres');settwoHour("00");}       
    if(CheckHours(OneHour,hourTwo)){
      alert('Please select another houres');settwoHour("00");}
    else if((checkOpenTravel(Newlocations[0],Newlocations[1],tempDate.getHours())))alert('Please select another houres its closed !');
    else setIcon2('done');

}

  const onChangDate = ( event, selectedDate) =>{
    hideDatePicker();
    const currentDate =selectedDate || data;
    let tempDate = new Date(currentDate);
    let hourTwo =`${(tempDate.getHours())}`+ ':'+ `${(tempDate.getMinutes())}`;
    settwoHour(hourTwo);
    console.log(hourTwo);
  }
  

  const onChangeThree = ( event, selectedDate) =>{
    hideTimePickerThree();  
    const currentDate =selectedDate || data;
    let tempDate = new Date(currentDate);
    let hourThree =`${(tempDate.getHours())}`+ ':'+ `${(tempDate.getMinutes())}`;
    setthreeHour(hourThree);
    setHL3(tempDate.getHours());
    console.log(hourThree);
    if(CheckHoursAfter(HL2,tempDate.getHours())){alert('Please select another houres');setthreeHour("000");}       
    if(CheckHours(twoHour,hourThree)){
      alert('Please select another houres');
      setthreeHour("000");
    }else if(CheckHours(OneHour,hourThree)) {
     alert('Please select another houres');
     setthreeHour("000");
    } else if((checkOpenTravel(Newlocations[1],Newlocations[2],tempDate.getHours())))alert('Please select another houres its closed !');
    else setIcon3('done');

}



  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || data;
    console.log(currentDate);
 };

 const ShowOpenClose = (Location) => {
  if(Location.opening_hours){
    alert('Open at '+Location.opening_hours.days.mon.start.hour+':'+
    Location.opening_hours.days.mon.start.minute)
  }else{alert('Open at 24h');}
 }

 function getClucHoures (lat1,lat2,lng1,lng2) {

    var dLat = lat2 - lat2; 
    var dLon = lng2 - lng1; 
    var dPhi = Math.log(Math.tan(lat2 / 2 + Math.PI / 4) / Math.tan(lat1 / 2 + Math.PI / 4)); 
    var q = (Math.abs(dLat) > 0) ? dLat / dPhi : Math.cos(lat1); 
    if(dLon<0) dLon =dLon*-1;
    if (dLon > Math.PI) 
    { 
        dLon = dLon > 0 ? -(2 * Math.PI - dLon) : (2 * Math.PI + dLon); 
    } 
    var brng = ToDegree(Math.atan2(dLon, dPhi)); 
    return brng/60; 
}


function ToDegree (val){ return val * 180 / Math.PI; } 

const checkOpenTravel = (Loc1, Loc2, hour) =>{
  var decH = getClucHoures(Loc1.coordinates.latitude,
                Loc2.coordinates.latitude,
                Loc1.coordinates.longitude,
                Loc2.coordinates.longitude);

  if(Loc2.opening_hours === null ) return false;
  else if(Loc2.opening_hours.days.mon.end.hour < hour+decH) return false;
  else return true;
}


return (
        <View style={styles.container2} >
            <ImageBackground source={image} resizeMode="cover" style={styles.img}>
              
            <View style={styles.round}>
              <TextInput style={styles.input} onChangeText={onChangeNameTrack} value={NameTrack}/>
              <View style={{}}>
              <DatePicker style={{ width: 150 }}
              date={date}
              placeholder={setData}
              format='YYYY/MM/DD'
              confirmBtnText='Confirm'
              cancelBtnText='Cancel'
              placeholderTextColor='green'
              onDateChange={(d) => setData(d)}/>
              </View>
            </View>


            <View style={styles.round}>              
              <Picker
                  mode='dropdown'
                  style={{ height: 50, width: 200 }}
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setOneLocation(Newlocations[0].name)}>
                  <Picker.Item label={Newlocations[0].name} value={Newlocations[0].name} />
                </Picker>
                     <Button title="Hour" color={'green'} onPress={showTimePickerOne} />
                       { isTimePickerVisibleOne && <DateTimePicker
                       mode="time"
                       value={Time}
                       backgroundColor = "green"
                       onCancel={hideTimePickerOne}
                       locale="en_EN"
                       is24Hour={true}
                       onChange={onChangOne}
                       headerTextIOS="Choose the hour"
                      />}
                       <Text>{OneHour}</Text>
                       <TouchableOpacity >
                       <Icon name="timer" color="green" onPress={()=> ShowOpenClose(Newlocations[0])}/>
                       </TouchableOpacity>

                       <TouchableOpacity >
                       <Icon name={icon1} color="green"/>
                       </TouchableOpacity>
                 
              </View>

              <View style={styles.round}>              
              <Picker
                  mode='dropdown'
                  style={{ height: 50, width: 200 }}
                  selectedValue={OneLocation}
                  onValueChange={(itemValue, itemIndex) => setTwoLocation(Newlocations[1].name)}>
                  <Picker.Item label={Newlocations[1].name} value={Newlocations[1].name} />
                </Picker>
                     <Button title="Hour" color={'green'} onPress={showTimePickerTwo} />
                       { isTimePickerVisibleTwo && <DateTimePicker
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
                       <Icon name="timer" color="green" onPress={()=> ShowOpenClose(Newlocations[1])}/>
                       </TouchableOpacity>

                       <TouchableOpacity >
                       <Icon name={icon2} color="green"/>
                       </TouchableOpacity>              
                      </View>

            <View style={styles.round}>              
              <Picker
                  mode='dropdown'
                  style={{ height: 50, width: 200 }}
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setThreeLocation(Newlocations[2].name)}>
                  <Picker.Item label={Newlocations[2].name} value={Newlocations[2].name} />

                </Picker>
                     <Button title="Hour" color={'green'} onPress={showTimePickerThree} />
                       { isTimePickerVisibleThree && <DateTimePicker
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
                       <Icon name="timer" color="green" onPress={ ()=> ShowOpenClose(Newlocations[2])}/>
                       </TouchableOpacity>

                       <Icon name={icon3} color="green"/>
                      </View>   
              
              <View style={styles.round}>              
              <Picker
                  mode='dropdown'
                  style={{ height: 50, width: 200 }}
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setFourLocation(Newlocations[3].name)}>
                  <Picker.Item label={Newlocations[3].name} value={Newlocations[3].name} />
                </Picker>
                     <Button title="Hour" color={'green'} onPress={showTimePickerFour} />
                       { isTimePickerVisibleFour && <DateTimePicker
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
                       <Icon name="timer" color="green" onPress={()=> ShowOpenClose(Newlocations[3])}/>
                       </TouchableOpacity>
                       <TouchableOpacity >
                       <Icon name={icon4} color="green"/>
                       </TouchableOpacity>

              </View>       
              <TouchableOpacity >
        
             <Text   style={{ color: 'green', textAlign: 'center', borderWidth: 1, borderColor: 'green', height: 30, width: 80, marginLeft: 140, marginTop: 20, borderRadius: 6, paddingTop: 2 }} onPress={onAdd}>
                 Save
             </Text>
             </TouchableOpacity>
             </ImageBackground>
        </View>
        
    );
};
const styles = StyleSheet.create({
    input: {
      height: 40,
      width: 180,
      margin: 12,
      borderWidth: 1,
      backgroundColor:'white',
       padding: 10
    }, 
    img: {
      flex: 1,
      justifyContent: "center"
    },  
    round: {
      paddingTop: 5 ,
       justifyContent: 'space-between',
       alignItems:'center' ,
        flexDirection: 'row' ,
         flexWrap : 'wrap'
      },
    button: {
      marginTop: 30 ,
        width: 80,
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
          paddingTop: 50,
          backgroundColor : 'white'
        }, 
      container2: {
          flex: 1,
        },     
});

export default ChooseLocation;