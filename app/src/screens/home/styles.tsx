
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    homeBodyContainer: {
        marginTop: 2,
        backgroundColor: '#f7f3f0',
        flex: 1,
    },
    logoContainer: {
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionContainer: {
        height: '70%',
        padding: 3,
    },
    subOptionContainer: {
        height: '30%',
        gap: 5,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
});
export default style;
