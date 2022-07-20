import React from 'react';
import {StyleSheet,View,TextInput,Text,FlatList, TouchableOpacity, Alert, StatusBar} from 'react-native';



const App = () => {
      
  return (
   <View style={styles.maincontainer}>
    <View style={styles.subcontainer}>
      <View style={styles.header}>
        <Text style={styles.headertext}>MEDDU</Text>
        <Text style={styles.headertext}>EDUCATION</Text>

      </View>
      <View style={styles.logincontainer}>
        <Text style={styles.loginheadertxt}>LOGIN</Text>
        
        <View style={styles.inputcontainer}>
          <View style={styles.singleinp}>
          <Text style={{color:'blue'}}>Email</Text>
          <TextInput autoComplete="off" style={styles.inp} placeholder='example@email.com'/>
          </View>
          <View style={styles.singleinp}>
          <Text style={{color:'blue'}}>Password</Text>
          <TextInput autoComplete="off"  secureTextEntry={true} style={styles.inp} placeholder='**********'/>
          </View>
          <TouchableOpacity style={styles.forgotpasswrd}>
            <Text style={{color:'blue'}}>Forgot your Password ?</Text>
          </TouchableOpacity>

          <View>
            <TouchableOpacity style={styles.loginbtn}>
              <Text style={{color:'white',fontWeight:'bold'}}>LOGIN</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{alignItems:'center',marginTop:5}}>
            <Text style={{color:'blue'}}>Don't have an account ? Sign up</Text>
            </TouchableOpacity>
          

        </View>
      </View>

    </View>


   </View>
  );
};

const styles = StyleSheet.create({
  header:{
    backgroundColor:'#052869',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 30

  },
  headertext:{
    fontSize: 24,
    color: 'white',
    fontWeight:'bold'
    
  },
  loginheadertxt:{
    textAlign:'center',
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold'
  },
  logincontainer:{
    backgroundColor:'white',
    marginHorizontal: 10,
    borderWidth:0.5,
    borderColor:'white'
  },
  singleinp:{
    marginBottom: 10,
  },
  inp:{
    borderBottomWidth: 1,
    // borderColor:'blue',
    borderColor:'#3d69ba',
    height: 50,
    fontSize: 18,
  },
  forgotpasswrd:{
    marginLeft: '50%',
    
  },
  loginbtn:{
    backgroundColor:'#1863ed',
    height: 45,
    marginHorizontal: '30%',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginTop: 10,
    borderRadius: 30
  }



});

export default App;
