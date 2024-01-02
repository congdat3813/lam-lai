import React, { FunctionComponent, useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../../Components/shared";
import { colors } from "../../Components/colors";
import bg from "../../../assets/bg/loginbg.png";
import logo from "../../../assets/bg/logocay.png";
import RegularText from "@/Components/texts/RegularText";
import { Pressable, TextInput } from "react-native";
import MailIcon from "../../../assets/icon/MailIcon";
import RegularButton from "@/Components/button/RegularButton";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { RootScreens } from "..";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "@/Services/auth";
const LoginScreenContainer = styled(Container)`
  width: 100%;
  height: 100%;
`;
const BackgroundImage = styled.ImageBackground`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  resize-mode: contain;
  flex-direction: column;
  resize-mode: contain;
  flex: 1;
`;
const BigContainer = styled.View`
  width: 100%;
  height: 50%;
  background-color: ${colors.white};
  align-self: flex-end;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 23px 23px 0px 0px;
  padding: 10px;
`;
const LogoContainer = styled.Image`
  width: 40%;
  flex: 1;
  resize-mode: contain;
`;
const InputDivContainer = styled.View`
  height: 60px;
  background-color: ${colors.lightgray};
  margin-horizontal: 13px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
`;

const InputContainer = styled.TextInput`
  height: 100%;
  background-color: ${colors.black};
`;
const LoginScreen: FunctionComponent = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [authLogin, authLoginResult] = useLoginUserMutation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleLogin = async () => {
      try {
        const response = await authLogin({username, password}).unwrap()
        if (response) {
          // Store the JWT in AsyncStorage
          AsyncStorage.setItem('token', response.token);
          AsyncStorage.setItem('user', JSON.stringify(response.user));
          // Navigate to the home page
          navigation.reset({
            index: 0,
            routes: [
              {
                name:RootScreens.HOME,
              },
            ],
          });
        } else {
          // Handle login error
          console.error('Login failed');
          
        }
      } catch (err) {
        // Handle any other errors
        console.error('An error occurred:', err);
      }
    };
  return (
    <>
      <LoginScreenContainer style={{}}>
        <BackgroundImage source={bg}>
          <LogoContainer source={logo}></LogoContainer>
          <BigContainer>
            <InputDivContainer style={{ marginTop: 50 }}>
              <Feather
                name="mail"
                size={24}
                color="black"
                style={{ marginHorizontal: 20 }}
              />
              <TextInput
                style={{ textAlign: "justify", flexGrow: 1 }}
                placeholder="Tên đăng nhập"
              ></TextInput>
            </InputDivContainer>
            <InputDivContainer style={{ marginTop: 40 }}>
              <AntDesign
                name="lock1"
                size={24}
                color="black"
                style={{ marginHorizontal: 20 }}
              />
              <TextInput
                secureTextEntry={true}
                placeholder="Mật khẩu"
                style={{ flexGrow: 1 }}
              ></TextInput>
            </InputDivContainer>
            <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
              <RegularButton
                onPress={() => {
                  // navigation.reset(RootScreens.HOME);
                  navigation.reset({
                    index: 0,
                    routes: [
                      {
                        name:RootScreens.HOME,
                      },
                    ],
                  })
                }}
                btnStyles={{ marginTop: 20 }}
                textStyles={{ color: `${colors.white}`, fontSize: 20 }}
              >
                Đăng Nhập
              </RegularButton>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignSelf:'center', margin:20 }}>
              {/* <Pressable style={{ marginHorizontal: 5 }} onPress={()=>{navigation.navigate(RootScreens.REGISTER1)}}>
                <RegularText textStyles={{color:colors.primary}}>Đăng nhập bằng điện thoại</RegularText>
              </Pressable> */}
              {/* <RegularText textStyles={{color:colors.primary}}>|</RegularText> */}
              <Pressable style={{ marginHorizontal: 5 }} onPress={()=>{navigation.navigate(RootScreens.REGISTER3)}}>
                <RegularText textStyles={{color:colors.primary}}>Đăng kí</RegularText>
              </Pressable>
            </View>
          </BigContainer>
        </BackgroundImage>
      </LoginScreenContainer>
    </>
  );
};
export default LoginScreen;
