import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import {
  ButtonComponent,
  Container,
  InputComponent,
  TitleComponent,
} from '../components';

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState<
    FirebaseAuthTypes.ConfirmationResult
  >();
  const [code, setCode] = useState('');

  const handleLoginWithPhoneNumber = async () => {
    if (phoneNumber.length === 10) {
      const smsPhone = `+84${phoneNumber.substring(1, 10)}`;

      try {
        const confirmation = await auth().signInWithPhoneNumber(smsPhone);

        if (confirmation) {
          setConfirm(confirmation);
        }
      } catch (error) {
        console.log(`can not send sms code to your phone: ${error}`);
      }
    } else {
      Alert.alert('Error', 'Invalid phone number', [
        {
          text: 'OK',
          onPress: () => setPhoneNumber(''),
        },
      ]);
    }
  };

  const handleComfirmCode = async () => {
    if (code && code.length === 6) {
      await confirm
        ?.confirm(code)
        .then(userCredential => {
          console.log(userCredential?.user);
        })
        .catch(error => console.log('can not confirm your code: ', error));
    } else {
      Alert.alert('Error', 'Invalid code');
    }
  };

  return (
    <Container>
      {!confirm ? (
        <>
          <View
            style={[
              {
                paddingHorizontal: 16,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              },
            ]}
          >
            <TitleComponent text="Phone number" />
            <InputComponent
              value={phoneNumber}
              onChange={val => setPhoneNumber(val)}
              max={10}
              clear
              placeholder="Phone number"
            />

            <View style={{height: 20}} />
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              marginBottom: 20,
            }}
          >
            <ButtonComponent text="Skip" onPress={handleLoginWithPhoneNumber} />
          </View>
        </>
      ) : (
        <>
          <View
            style={[
              {
                paddingHorizontal: 16,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              },
            ]}
          >
            <TitleComponent text="Confirm your code" />
            <InputComponent
              value={code}
              onChange={val => setCode(val)}
              max={6}
              clear
              placeholder="code"
            />

            <View style={{height: 20}} />
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              marginBottom: 20,
            }}
          >
            <ButtonComponent text="Confirm" onPress={handleComfirmCode} />
          </View>
        </>
      )}
    </Container>
  );
};

export default LoginScreen;
