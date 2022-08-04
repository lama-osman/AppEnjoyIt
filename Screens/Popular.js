import { React, useState, useEffect, useContext } from 'react';
import { Text, View, SafeAreaView, Dimensions, Image, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Carousel from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
export const arr1 = [];

export default function Popular({ route, navigation }) {
    const [infoPOP, setInfoPOP] = useState(null);
    const [loadinggg, setLoadinggg] = useState(false);
    var dataPOP2 = [];
    var dataPOP = [];

    const funPopular = () => {
         fetch('http://194.90.158.74/bgroup61/test2/tar5/api/Recommendation', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8'
            })
        })
            .then(res => {
               
                console.log('res ok', res.ok);
                return res.json();
            })
            .then(
                (result) => AddDataPOP(result),
                (error) => {
                    return null;
                }
            )

    }

    const AddDataPOP = (async(res) => {
        res.map((item) => {
            dataPOP2.push(item.Link.Place1);
            dataPOP2.push(item.Link.Place2)
        })
        if (dataPOP2) {
            var uniq = [...new Set(dataPOP2)];
            const t = await Promise.all(uniq.map(async(d) => {await getfromtriposo(d) }))
            if(t!==null){
                setInfoPOP(dataPOP);setLoadinggg(true);
                console.log("Info2 : ",infoPOP);
                console.log("data : ",dataPOP);
            }
        }
    })
    const getfromtriposo = (async (item) => {
        await fetch("https://www.triposo.com/api/20220104/poi.json?id="+item+"&account=8T0XUHMG&token=yyu117n9kp0vnas7s5ogaotfyu6dqqco", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8'
            })
        }).then(res => {
            return res.json();
        }).then(
            (result) => { dataPOP.push(result.results[0]);}, 
            (error) => {
                return null;
            }
        )
    })
    const renderItemPopular = ({ item, index }) => {
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
                    marginTop: 20

                }}>
                <Image source={{ uri: item.images.length > 0 ? item.images[0].sizes.medium.url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png?20190827162820' }} style={{ width: 200, height: 200 }} />
                <Text style={{ marginVertical: 10, fontSize: 20, fontWeight: 'bold' }}> {item.name}</Text>
                <Text style={{ color: 'green', marginVertical: 10, fontSize: 20, fontWeight: 'bold' }}>{(item.score).toFixed(2)}</Text>
                <Text style={{ color: 'green', marginVertical: 10, fontSize: 20, fontWeight: 'bold' }} onPress={() => navigation.navigate('PlaceInfo', { item: item })}>show more</Text>
                <Icon name='star'></Icon>
                
            </View>
        );
    }

    return (
        loadinggg ? <ScrollView>
            <View >
                <Text style={{ color: 'white', marginVertical: 20, fontSize: 20, fontWeight: 'bold', backgroundColor: 'green', marginTop: 25, textAlign: 'center', height: 50 }}>Top Attraction</Text>
                <SafeAreaView>
                    <Carousel
                        data={infoPOP}
                        renderItem={renderItemPopular}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                    />
                </SafeAreaView>
            </View>
        </ScrollView> : <View>{funPopular()}</View>
    );
}

const styles = StyleSheet.create({
    containerFlex: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    isVisible: {
        width: 30, height: 30,
        padding: 10,

    },
    disabled: {
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
    textStyle: { fontSize: 15, color: '#fff' },
    buttinContainer: {
        width: 45,
        height: 45,
        borderRadius: 21,
        right: -320,

        padding: 10,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
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