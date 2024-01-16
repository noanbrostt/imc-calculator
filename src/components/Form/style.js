import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: 'min(390px, 98%)',
        marginInline: 'auto',
    },
    form: {
        width: '100%',
        height: 'auto',
        padding: 10,
    },
    formLabel: {
        color: '#000',
        fontSize: 18,
        paddingLeft: 20,
    },
    formInput: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    formButton: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#ff0043',
        paddingBlock: 14,
        marginInline: 'auto',
        marginTop: 30,
        minHeight: 'unset',
    },
    formTextButton: {
        fontSize: 20,
        color: '#fff',
    },
    errorMessage: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    exhibitionResultImc: {
        width: '100%',
        height: 196,
    },
    listImcs: {
        marginTop: 20,
        width: '80%',
        maxHeight: 200,
    },
    resultImcItem: {
        fontSize: 24,
        color: 'red',
        height: 50,
        textAlign: 'center',
    }
});

export default styles