import { ADD_USER_CREDENTIALS, ADD_USER_DETAILS } from './constant';

export const addUserDetails = (user: any) => {
    return {
        type: ADD_USER_DETAILS,
        payload: user,
    };
};
export const addUserCredentials = (credentials: any) => {
    return {
        type: ADD_USER_CREDENTIALS,
        payload: credentials,
    };
};
