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
import { FlatList } from "react-native-web";

export default function Form() {

    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [messageImc, setMessageImc] = useState('')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessageAltura, setErrorMessageAltura] = useState(null)
    const [errorMessagePeso, setErrorMessagePeso] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCalculator() {
        let heightFormat = height.replace(',', '.')
        let weightFormat = weight.replace(',', '.')
        let totalImc = (weightFormat/(heightFormat*heightFormat)).toFixed(2)
        setImcList ((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}])
        setImc(totalImc)
    }

    function validationImc() {
        if (weight != '' && height != '') {
            imcCalculator()
            setHeight('')
            setWeight('')
            setMessageImc("Seu IMC é:")
            setTextButton("Calcular novamente")
            setErrorMessageAltura(null)
            setErrorMessagePeso(null)
        } else {
            Vibration.vibrate()
            if (textButton != "Calcular novamente") {
                if (weight == '' && height == '') {
                    setErrorMessageAltura('Campo obrigatório*')
                    setErrorMessagePeso('Campo obrigatório*')
                } else if (weight == '') {
                    setErrorMessagePeso('Campo obrigatório*')
                    setErrorMessageAltura(null)
                } else {
                    setErrorMessageAltura('Campo obrigatório*')
                    setErrorMessagePeso(null)
                }
            }
            setImc(null)
            setMessageImc("Preencha o peso e altura!")
            setTextButton("Calcular")
        }
    }

    return(
        <View style={styles.formContext}>
            {imc == null ? 
            <Pressable 
                onClick={Keyboard.dismiss}
                style={styles.form}
            >
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessageAltura}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={(h) => setHeight(h.trim().replace(/[^0-9.,]/g, ''))}
                    value={height}
                    placeholder="Ex: 1.75"
                    inputMode="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessagePeso}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={(w) => setWeight(w.trim().replace(/[^0-9.,]/g, ''))}
                    value={weight}
                    placeholder="Ex: 72.750"
                    inputMode="numeric"
                />
            </Pressable>
            :
            <View style={styles.exhibitionResultImc}>
                <ResultImc
                    resultImc={imc}
                    messageResultImc={messageImc}
                />
            </View>
            }
            <TouchableOpacity
                style={styles.formButton}
                onPress={() => validationImc()}
            >
                <Text style={styles.formTextButton}>{textButton}</Text>
            </TouchableOpacity>
            <FlatList
                style={styles.listImcs}
                data={[...imcList].reverse()}
                renderItem={({item}) => {
                    return(
                        <Text style={styles.resultImcItem}>
                            {item.imc}
                        </Text>
                    )
                }}
                keyExtractor={item => item.id}
            />
        </View>

    )
}