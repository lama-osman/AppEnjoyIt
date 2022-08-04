import { StyleSheet, Text, View, TextInput,TouchableOpacity, ImageBackground } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import React, { useState , useContext} from 'react';
import { Input } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { ContextForItems } from '../Components/Context';
import { ScrollView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';

export var data_signup = []
const radioButtonsData = [
  {
    id: '1',
    label: (<Text style={{ color: 'black' }}>{'Male'}</Text>)
    ,

    value: 'option1',
    color: 'green',
    selected: false,

  },
  {
    id: '2',
    label: (<Text style={{ color: 'black' }}>{'Female'}</Text>)
    ,
    value: 'option2',
    color: 'green',
    selected: false
  },


];

const SignUp = ({ navigation }) => {

  const contextProp = useContext(ContextForItems);
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const onPressRadioButton = radioButtonsArray => {
    setRadioButtons(radioButtonsArray);
  };
   
  const AddUser = (async() => {
    const s = {
      UserId: 1,
      UserName: userName,
      Name: name,
      Password: password,
      Address: address,
      PhoneNumber: phoneNumber,
      Gender: radioButtons[0].selected === true ? 'Male' : 'Female',
      BirthDate: date,
      Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png?20190827162820'

    }
    const response = await fetch('http://194.90.158.74/bgroup61/test2/tar5/api/Users', {
      method: 'Post',
      body: JSON.stringify(s),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
    const data = await response.json();
    data !== null ? navigation.navigate('Home') : alert("try again later");
    data!==null?contextProp.UpdateUser(data):null;

    return data;
  })

  const saveInfoToFirebase = () => {
    auth
    .createUserWithEmailAndPassword(email,password)
    .then(userCredentials =>{
      const user = userCredentials.user;
      console.log(user.email)
      data_signup.push(name)
      data_signup.push(email)
      data_signup.push(" ")
      data_signup.push(phoneNumber)
      data_signup.push(address)
      data_signup.push(radioButtons[0].selected === true ? 'Male':'Female')
      data_signup.push(date)

      navigation.navigate("LogIn")
    })
    .catch(error=>{alert(error.message)})
  }
  
  return (
  <ScrollView>
    <View style={styles.container}>
        <Text style={styles.Text}>Sign Up to Enjoy It </Text>
        <TextInput placeholder='enter name' placeholderTextColor='black' style={styles.TextInput} onChangeText={name => setName(name)} />
        <TextInput placeholder='enter User Name' placeholderTextColor='black' style={styles.TextInput} value={userName} onChangeText={userName => setUserName(userName)} />
        <TextInput placeholder='enter Password' placeholderTextColor='black' secureTextEntry={true} style={styles.TextInput} onChangeText={pass => setPassword(pass)} />
        <TextInput placeholder='enter PhoneNumber' placeholderTextColor='black' style={styles.TextInput} onChangeText={phone => setPhoneNumber(phone)} />
        <TextInput placeholder='enter Address' placeholderTextColor='black' style={styles.TextInput} onChangeText={address => setAddress(address)} />

        <Text style={styles.RADIO}>Gender:</Text>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          layout="row"
        />

        <Text style={styles.Birth}>BirthDate :</Text>
        <DatePicker style={{ width: '80%' }}
          date={date}
          placeholder='Select Date'
          format='YYYY/MM/DD'
          confirmBtnText='Confirm'
          cancelBtnText='Cancel'
          placeholderTextColor='black'
          onDateChange={(d) => setDate(d)}
        />
        <TouchableOpacity
        onPress={AddUser}>
        <Text style={styles.btn}>Submit</Text>
      </TouchableOpacity>
      
      </View>  
     
      </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: 'black',
    fontSize: 30,
    marginBottom:40,
    marginTop:30

  },
  TextInput: {
    borderWidth: 2,
    borderColor: 'green',
    color: 'black',
    width: 300,
    height: 40,
    padding: 5,
    marginTop: 10,


  },
  btn: {
    marginTop: 30,
    borderColor: 'green',
    borderWidth: 2,
    color: 'black',
    width: 90,
    height: 30,
    textAlign: 'center',
    marginBottom: 30,
    paddingTop: 5
  },
  singUp: {
    fontWeight: 'bold'
  },
  txt: {
    color: 'black'
  },
  RADIO: {
    color: 'black',
    marginTop: 10,
    padding: 6,
    marginRight: 240
  },
  Birth: {
    marginRight: 220,
    color: 'black',
    marginBottom: 15
  },
  date: {
    shadowColor: 'black',

  },
  img: {
    flex: 1, 
    justifyContent: "center"
  }
});
export default SignUp;