import {React,  useState, useEffect } from 'react';
import { Text, View,SafeAreaView, Dimensions, Image,Button 
  ,ScrollView,StyleSheet,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Carousel from 'react-native-snap-carousel';
//const axios = require('axios').default;
import Recommendation from './Recommendation.JS';
export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
export const arr1 = [];
const Home = ({ navigation }) => {



  let SelectAllLocation = [];
  const [isDone, setIsDone] = useState(false);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const[inxData,setinxData] = useState(0);
  const[LoDa,setloDa] = useState([]);
  const [selectData, setSelectData] = useState(null);


  const MapArrLocations = (data) =>{
    let arr = data.map((item )=>{
      item.isSelected = false;
      return {...item}

    })
    console.log('ADDing...');
    setSelectData(arr);
  };

  const ShowRec = ()=>{
    return (
       <View>
      <View >
        <Text style={{ color: 'white' ,marginVertical: 20, fontSize: 20, fontWeight: 'bold',backgroundColor:'green',marginTop:25,textAlign:'center',height:50}}>Places</Text>
        <SafeAreaView>
        <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
        />   
        </SafeAreaView>
      </View>

      <Text style={{ marginVertical: 5, fontSize: 15, fontWeight: 'bold',color:"gray" }}> You Can Select 4 Locations ({arr1.length})  </Text>
      <TouchableOpacity>
        {isDone && <Button title="Done"
        onPress={() => MapArrAllSelectLocations()}
        ></Button>}
        </TouchableOpacity>
        <View>
        <Text> Recommendation by :  </Text>
        </View>
        <Text> Recommendation by :  </Text>

    </View>
    )
  }
  const MapArrAllSelectLocations = () =>{
    for (let i=0; i<arr1.length; i++){
      SelectAllLocation[i] = selectData[arr1[i]];
    }
    console.log(SelectAllLocation.length);
    //AllDataPlace.push(selectData);
    navigation.navigate('ChooseLocation', {paramKey: SelectAllLocation,DataKey:selectData});
  };
 
 function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  const addPlsaces= (index) => {
    setinxData(index);


    if(!(selectData[index].isSelected)) {
      if(arr1.length <4) {
        arr1.push(index);
        setIsDone(false);
        selectData[index].isSelected=true;
      }
     }  
    else {
      selectData[index].isSelected=false;
      removeItemOnce(arr1,index);
    }
    if(arr1.length == 4){setIsDone(true);}
    console.log('ADdD select '+ selectData[index].isSelected);
    console.log('ADD ff    '+ index);
    console.log(arr1 + " length : "+ arr1.length);
}

  const renderItem = ({ item , index }) => {
    return (
      <View
        style={{
          borderWidth: 1,
          padding: 20,
          borderRadius: 20,
          borderColor: 'green',
          alignItems: 'center',
          backgroundColor: 'white',
          width: 250,
          marginTop:20

        }}>
        <Image source={{ uri: item.images.length > 0 ? item.images[0].sizes.medium.url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png?20190827162820'}} style={{ width: 200, height: 200 }} />
        <Text style={{ marginVertical: 10, fontSize: 20, fontWeight: 'bold' }}> {item.name}</Text>
        <Text style={{ color: 'green' ,marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>{(item.score).toFixed(2)}</Text>
        <Text style={{ color: 'green' ,marginVertical: 10, fontSize: 20, fontWeight: 'bold'}} onPress={() => navigation.navigate('Items',{item:item})}>show more</Text>
        <Icon name='star'></Icon>
        <TouchableOpacity>
        <Button style={styles.buttinContainer} title={selectData[index].isSelected?"Delete":"Add"}
                        onPress={() => addPlsaces(index)}>
                        </Button>
        </TouchableOpacity>
      </View>
    );
  }

  useEffect(async () => {
    await fetch("https://www.triposo.com/api/20220104/poi.json?location_id=Eilat&fields=all&count=10&account=8T0XUHMG&token=yyu117n9kp0vnas7s5ogaotfyu6dqqco",{
      method: "GET",
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    }).then(res => {
        console.log('res status', res.status);
        console.log('res ok', res.ok);
        return res.json();
      }).then(
        (result) => { setData(result.results); MapArrLocations(result.results);setLoading(false);},
        (error) => {return null;})
    }, [10]);


  return (
    loading === false ? ShowRec() : <Image source={require('../Images/img.gif')}/>

  );
};
export default Home;

const styles = StyleSheet.create({
  containerFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  isVisible: {
    width:30, height:30 ,
    padding: 10,

  },
  disabled:{
    padding: 10,
    display: 'none'  
  },
  header: {
    height: 15,
    width: '100%',
    backgroundColor: 'pink'
  },
  row: {
    flexDirection: 'row'
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 16,
    color: 'grey'
  },
  bottomCard: {
        width: '100%',
        padding: 30,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        marginTop: 40
    },
  inpuStyle: {
        backgroundColor: 'green',
        borderRadius: 4,
        borderWidth: 1,
        alignItems: 'center',
        height: 48,
        justifyContent: 'center',
        marginTop: 20
    },
    container: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginTop: 60,

    },
    textStyle: {fontSize: 15, color: '#fff'},
    buttinContainer: {
      width: 45,
      height: 45,
      borderRadius: 21,
      right: -320,

      padding: 10,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:70,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: .8,
      shadowRadius: 5,
      elevation: 5,
     },
  plus: {
      fontSize: 40,
      color: '#fff',
      position: 'absolute',
      top: -6,
      left: 9,
  }
});