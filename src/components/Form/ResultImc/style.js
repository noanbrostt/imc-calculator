import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc: {
        flex: 1,
        marginTop: 15,
        paddingTop: 40,
        borderRadius: 50,
        alignItems: 'center',
        width: '100%',
    },
    information: {
        color: "#FF0043",
        fontSize: 18,
        fontWeight: 'bold',
    },
    numberImc: {
        color: "#FF0043",
        fontSize: 48,
        fontWeight: 'bold',
    },
    boxShareButton: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    shared: {
        backgroundColor: '#1877f2',
        borderRadius: 50,
        padding: 5,
    },
    sharedText: {
        color: '#fff',
        fontWeight: 'bold',
        paddingInline: 30,
    }
});

export default styles