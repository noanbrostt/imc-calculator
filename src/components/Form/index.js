import React, { useState } from "react";
import { 
    View,
    Text,
    TextInput,
    Pressable,
    TouchableOpacity,
    Vibration,
    Keyboard 
} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {

    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [messageImc, setMessageImc] = useState('')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)

    function imcCalculator() {
        let heightFormat = height.replace(',', '.')
        let weightFormat = weight.replace(',', '.')

        // if ((heightFormat / weightFormat) == NaN){
        //     return setImc(null)
        // }
        return setImc((weightFormat/(heightFormat*heightFormat)).toFixed(2))
    }

    function validationImc() {
        if (weight != '' && height != '') {
            imcCalculator()
            setHeight('')
            setWeight('')
            setMessageImc("Seu IMC é:")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
            return
        }
        Vibration.vibrate()
        setErrorMessage('Campo obrigatório*')
        setImc(null)
        setMessageImc("Preencha o peso e altura!")
        setTextButton("Calcular")
    }

    return(
        <Pressable 
            onClick={Keyboard.dismiss}
            style={styles.formContext}
        >
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex: 1.75"
                    inputMode="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex: 72.750"
                    inputMode="numeric"
                />

                {/* <Pressable
                    onPress={() => validationImc()}
                >
                    <Text>{textButton}</Text>
                </Pressable> */}

                <TouchableOpacity
                    style={styles.formButton}
                    onPress={() => validationImc()}
                >
                    <Text style={styles.formTextButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>

            <ResultImc
                resultImc={imc}
                messageResultImc={messageImc}
            />
        </Pressable>
    )
}