import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../..//../Components/shared";
import { colors } from "../../../Components/colors";
import bg from "../../../../assets/bg/loginbg.png";
import logo from "../../../../assets//bg/logocay.png";
import RegularText from "@/Components/texts/RegularText";
import BigText from "@/Components/texts/BigText";
import { Pressable, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RegularButton from "@/Components/button/RegularButton";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootScreens } from "@/Screens";
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from "native-base";
const RegisterLoginContainer = styled.View`
  width: 100%;
  height: 100%;
`;
const BackgroundImage = styled.ImageBackground`
  align-items: center;
  justify-content: center;
  width: 100%;
  resize-mode: contain;
  flex-direction: column;
  flex: 1;
`;
const LogoContainer = styled.Image`
  resize-mode: contain;
  background-color: ${colors.tranparent};
  margin-bottom: 10px;
`;
const SubContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: flex-start;
  align-items: center;
  height: 70%;
`;
const InputDivContainer = styled.View`
  height: 60px;
  background-color: ${colors.lightgray};
  margin-horizontal: 13px;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  width: 90%;
  margin-vertical: 4px;
`;

const RegisterScreen03: FunctionComponent = () => {
  const navigaiton =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <RegisterLoginContainer>
      <BackgroundImage source={bg}>
        <SubContainer>
          <LogoContainer source={logo}></LogoContainer>
          <View style={{ marginBottom: 90, alignItems: "center" }}>
            <BigText textStyles={{ color: colors.white, fontWeight: "600" }}>
              Bắt đầu với SMART
            </BigText>
          </View>
          <InputDivContainer>
            <AntDesign name="mail" size={24} color="black"  style={{marginHorizontal:10}}/>
            <TextInput placeholder="Email" style={{ flexGrow: 1 , padding:10}}></TextInput>
          </InputDivContainer>
          <InputDivContainer>
            <AntDesign name="user" size={24} color="black"  style={{marginHorizontal:10}}/>
            <TextInput placeholder="Tên đăng nhập" style={{ flexGrow: 1 , padding:10}}></TextInput>
          </InputDivContainer>
          <InputDivContainer>
            <AntDesign name="lock" size={24} color="black" style={{marginHorizontal:10}} />
            <TextInput secureTextEntry={true} placeholder="Mật khẩu" style={{ flexGrow: 1 , padding:10}}></TextInput>
          </InputDivContainer>
          <InputDivContainer>
            <AntDesign name="lock" size={24} color="black" style={{marginHorizontal:10}} />
            <TextInput secureTextEntry={true} placeholder="Xác nhận lại mật khẩu" style={{ flexGrow: 1 , padding:10}}></TextInput>
          </InputDivContainer>
          <View style={{width:'100%', paddingHorizontal:50, marginTop: 30}}>
            <RegularButton
              btnStyles={{ marginTop: 10 }}
              onPress={() => {
                navigaiton.navigate(RootScreens.REGISTER4);
              }}
            >
              <RegularText
                textStyles={{
                  fontWeight: "700",
                  fontSize: 20,
                  color: colors.white,
                }}
              >
                Tạo tài khoản
              </RegularText>
            </RegularButton>
          </View>
          <View style={{marginTop:10, marginHorizontal:20}}>
            <Pressable onPress={()=>{navigaiton.navigate(RootScreens.LOGIN)}}>
                <RegularText textStyles={{color:colors.white, fontSize:15, fontWeight:'600'}}>
                    Đã có tài khoản? Đăng nhập
                </RegularText>
            </Pressable>
          </View>
        </SubContainer>
      </BackgroundImage>
    </RegisterLoginContainer>
  );
};
export default RegisterScreen03;
