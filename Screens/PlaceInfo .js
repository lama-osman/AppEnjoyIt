import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Linking } from "react-native";
import { Icon } from 'react-native-elements';
import { Ionicons} from "@expo/vector-icons";


const PlaceInfo = ({ route, navigation }) => {
    const item = route.params.item;
    if(!item) item=null;
    console.log(item.coordinates.longitude);
    console.log(item.coordinates.latitude);
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${item.coordinates.latitude},${item.coordinates.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:white%7Clabel:S%7C${item.coordinates.latitude},${item.coordinates.longitude}&key=AIzaSyBkvI7scb3Lk8a2RLB0VI55Ma6TyvbX8LA
 `;
    console.log(item);



    const Checkp = (item) => {
        if(item.properties.length === 0){return false;}
        return true;
    }
    return (
     item ? <ScrollView>
            <View>
                
                 <Text style={{textAlign:'center',fontSize:30,padding:10,color:'green'}}>{item.name}</Text>
                <Image style={styles.bgImage} source={{ uri: item.images.length > 0 ? item.images[0].sizes.medium.url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png?20190827162820' }}></Image>
                <View style={styles.buttomContainer}>
                   
                    <Text style={{color:'green',fontSize:20,padding:6}}>Description:</Text><Text style={{padding:6,margin:3,fontSize:15}}>{item.intro}</Text>


                    <Text style={{fontSize:20,padding:5,margin:5}}><Icon name="phone" size={22} color="green" > </Icon>{Checkp(item) ? item.properties[0].value : null}</Text>
                    <Text style={{padding:5,margin:5,fontSize:18}}><Icon name="link" size={25} color="green" > </Icon> {Checkp(item) ? item.properties[1].value : null}</Text>

                    
                    <View style={{ width: '100%', height: 200, marginVertical: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', borderRadius: 4 }}>
                        <Image style={{ width: '100%', height: '100%' ,marginLeft:120}} source={{ uri: imagePreviewUrl }}></Image>
                        
                    </View>





                </View>


            </View>
        </ScrollView> : null
    )
}
export default PlaceInfo;

const styles = StyleSheet.create({
    bgImage: {
       // flex: 1,
       //position: 'absolute',
        width: "100%",
        height:190,
        borderWidth:1,
        borderRadius:100,
        borderColor:'green',
        justifyContent:'center'
    },

    profile: {
        height: 180,
        borderWidth: 2,
        borderColor: 'green',
        width: 180,
        borderRadius: 25,
        bottom: "10%",

    },
    buttomContainer: {
        marginTop:50,
        height: "90%",
        width: 300,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50

    }

})