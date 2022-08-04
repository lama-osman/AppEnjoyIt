import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useDispatch } from 'react-redux'

const favorites = [
    {
        id:'001',
        icon:<Icon name="map" type="font-awesome-5" iconStyle={{color:'#eee',padding:2,fontSize: 25}}/>,
        location:'NAME 3',
        lat:50.9183161,
        lng:-114.0547683,
        description:'צפון',
        destination:'Midridge Drive Southeast'
    },
    {
        id:'002',
        icon:<Icon name="map" type="font-awesome-5" iconStyle={{color:'#eee',padding:2,fontSize: 25}}/>,
        location:'NAME 2',
        lat: 51.04571309999999,
        lng:-114.0728195,
        description:'isreal',
        destination:'Eighth Avenue Place'
    },
    {
        id:'003',
        icon:<Icon name="map" type="font-awesome-5" iconStyle={{color:'#eee',padding:2,fontSize: 25}}/>,
        location:'NAME 1',
        lat:50.96961289999999,
        lng:-114.0316588,
        description:'isreal',
        destination:'Sue Higgins Off-Leash Area'
    }
]


const Favorite = () => {
    
    const dispatch = useDispatch()
    const [ selected, setSelected ] = useState(null)

    return(
            <FlatList
                contentContainerStyle={styles.favoritesList}
                data={favorites}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        onPress={() => {
                            dispatch(setDestination({
                                location: {lat: item.lat, lng: item.lng},
                                description: `${item.description}`
                            }))
                            setSelected(item.id)
                        }}
                        style={{
                            flexDirection:'row',
                            alignItems:'center',
                            margin:4,
                            backgroundColor: item.id === selected ? 'rgba(100,100,100,0.1)' : 'white',
                            borderBottomLeftRadius:999,
                            borderTopLeftRadius:999,
                            borderBottomRightRadius:999,
                            borderTopRightRadius:999
                        }}
                    >
                    <View style={styles.iconWrapper}>
                        {item.icon}
                    </View>
                    <View style={styles.detailsWrapper}>
                        <Text style={styles.locationText}>{item.location}</Text>
                        <Text style={styles.locationData}>{item.destination}</Text>
                    </View>
                </TouchableOpacity>
                )}
            />
    )
}

const styles = StyleSheet.create({
    favoritesList:{
        marginBottom:'auto',
        marginTop:'auto'
    },
    iconWrapper: {
        backgroundColor:'#111',
        width:45,
        height:45,
        borderRadius:999,
        justifyContent:'center',
        alignItems:'center'
    },
    detailsWrapper: {
        paddingLeft:5
    },
    locationText: {
        fontSize:16,
        color:'#111',
        fontWeight:'bold'
    },
    locationData: {
        fontSize:12,
        color:'#333'
    }
})

export default Favorite