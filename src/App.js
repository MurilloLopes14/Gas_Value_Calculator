//* Styles
import {
  AppStyle,
  Form,
  FormControl,
  ImageStyle,
  Input,
  Label,
  TextStyle,
} from "./Globals";

//* Expo
import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from "expo";

//* Hooks
import React, { useState, useEffect } from "react";

//* Utils
import Logo from "./assets/logo.png";
import { ModalComponent } from "./components/Modal";

function App() {
  const [gas, setGas] = useState("");
  const [alchool, setAlchool] = useState("");

  return (
    <>
      <StatusBar style="auto" translucent={false} backgroundColor={"#282829"} />
      <AppStyle>
        <ImageStyle source={Logo} />
        <TextStyle>Qual a melhor Opção?</TextStyle>

        <Form>
          <FormControl>
            <Label>Álcool (preço por litro)</Label>
            <Input
              renderToHardwareTextureAndroid={false}
              keyboardType={"numeric"}
              value={alchool}
              onChangeText={(value) => setAlchool(value)}
            />
          </FormControl>
          <FormControl>
            <Label>Gasolina (preço por litro)</Label>
            <Input
              renderToHardwareTextureAndroid={false}
              keyboardType={"numeric"}
              value={gas}
              onChangeText={(value) => setGas(value)}
            />
          </FormControl>
        </Form>
        <ModalComponent gas={gas} alchool={alchool} />
      </AppStyle>
    </>
  );
}

registerRootComponent(App);
