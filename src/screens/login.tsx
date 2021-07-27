import React from "react";
import { StyleSheet, View } from 'react-native';
import { Button, TextInput, Title } from "react-native-paper";

const Login = ({navigation}: any) => {

  const [text, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
      <View style={styleSheet.container}>
          <View style={styleSheet.textInput}>
            <Title>Login</Title>
              <TextInput
                label='Email'
                value={text}
                onChangeText={text => setEmail(text)}
                mode='outlined'
              />
            <TextInput
              label='Password'
              value={password}
              onChangeText={password => setPassword(password)}
              textContentType='password'
              mode='outlined'
            />
          </View>
        <View>
          <Button
            style={styleSheet.button}
            mode="contained"
            onPress={() => navigation.navigate('OverView')}>Ok</Button>
        </View>
      </View>
  )
}

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },

  textInput: {
    width: '85%',
    alignSelf: 'center',
    margin: 20
  },

  button: {
    width: '50%',
    alignSelf: 'center',
    margin: 10
  }
})

export default Login
