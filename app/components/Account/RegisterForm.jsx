import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/validations";
import { size, isEmpty } from "lodash";

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [formData, setFormData] = useState(initialFormValue);

  const [alert, setAlert] = useState({ state: false, messaje: "" });
  // useEffect(() => {
  //   setTimeout(() => {
  //     setAlert({ state: false, messaje: "" });
  //   }, 3000);
  // }, [alert]);

  const onSubmit = () => {
    const { email, password, repeatPassword } = formData;

    if (isEmpty(email) || isEmpty(password) || isEmpty(repeatPassword)) {
      console.log("Todos los campos son obligatorios");
      setAlert({ state: true, messaje: "Todos los campos son obligatorios" });
    } else if (!validateEmail(email)) {
      setAlert({ state: true, messaje: "El email es incorrecto." });
    } else if (password !== repeatPassword) {
      console.log("Las contraseñas tienen que ser iguales");
      setAlert({
        state: true,
        messaje: "Las contraseñas tienen que ser iguales.",
      });
    } else if (size(password) < 6) {
      console.log("La pass tiene que tener mas de 6 caracteres");
      setAlert({
        state: true,
        messaje: "El password tiene que contener almenos 6 caracteres",
      });
    } else {
      console.log("ok");
      setAlert({
        state: true,
        messaje: "Ok",
      });
    }
  };

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.formContainer}>
      {alert.state && (
        <View style={styles.boxAlert}>
          <Text styles={styles.alert}>{alert.messaje}</Text>
        </View>
      )}
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "email")}
        rightIcon={icons("at")}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showPassword ? false : true}
        onChange={(e) => onChange(e, "password")}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRigth}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Input
        placeholder="Repetir contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showRepeatPassword ? false : true}
        onChange={(e) => onChange(e, "repeatPassword")}
        rightIcon={
          <Icon
            type="material-community"
            name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRigth}
            onPress={() => setShowRepeatPassword(!showRepeatPassword)}
          />
        }
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContRegister}
        buttonStyle={styles.btnContRegister}
        rightIcon={icons("eye-outline")}
        onPress={onSubmit}
      />
    </View>
  );
};

const icons = (name) => {
  return (
    <Icon type="material-community" name={name} iconStyle={styles.iconRigth} />
  );
};

const initialFormValue = () => {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnContRegister: {
    marginTop: 20,
    width: "95%",
  },
  btnContRegister: {
    backgroundColor: "#00a680",
  },
  iconRigth: {
    color: "#c1c1c1",
  },
  alert: {
    tintColor: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  boxAlert: {
    textAlign: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#00a680",
    padding: 10,
    tintColor: "white",
  },
});
