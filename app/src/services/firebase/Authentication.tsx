import auth from '@react-native-firebase/auth';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';


export const sendVerificationCode = async (phone: string) => {
    try {
        const confirmation = await auth().signInWithPhoneNumber(phone);
        console.log('sendVerificationCode, confirmation: ', JSON.stringify(confirmation));
        if (confirmation) {
            return confirmation.verificationId;
        }
        return null;
    } catch (err) {
        console.log('Error In sendVerificationCode', JSON.stringify(err));
        throw err;
    }
};

export const signInWithVerificationCode = async (verificationId: string, code: string) => {
    try {
        const credentials: FirebaseAuthTypes.AuthCredential = auth.PhoneAuthProvider.credential(verificationId, code);
        console.log('signInWithVerificationCode, credentials: ',JSON.stringify(credentials));
        const userCredential: FirebaseAuthTypes.UserCredential = await auth().signInWithCredential(credentials);
        console.log('signInWithVerificationCode, userCredentials', JSON.stringify(userCredential));
        return userCredential;
    } catch (err) {
        console.log('Error While signInWithVerificationCode: ', JSON.stringify(err));
        throw err;
    }
};

export const updateUserDetail = async (displayName: string, photoUrl: string, email: string) => {
    try {
        const user = auth().currentUser;
        console.log('updateUserDetails, user: ', JSON.stringify(user));
        await user?.updateProfile({
            displayName: displayName,
            photoURL: photoUrl,
        });
        await user?.updateEmail(email);
        console.log('auth user successfully updated');
    } catch (err) {
        console.log('Error, updateUserDetail, err: ', JSON.stringify(err));
        throw err;
    }
};
