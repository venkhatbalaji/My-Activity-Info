import cookie from '../../../util/cookieHelper/cookie';

export const UPDATE_USER = 'mg/login/UPDATE_USER';
export const UPDATE_USER_ASYNC = 'mg/login/UPDATE_USER_ASYNC';

export const initialState = {
    user: {
        userName: (cookie.getUserDetails()) ? cookie.getUserDetails() : '',
        isLoggedIn: cookie.getLoggedInDetails()
    },
};

export const login = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_USER:
            console.log(action)
            return {
                ...state,
                user: {
                    ...state.user,
                    userName: action.payload.userName,
                    isLoggedIn: action.payload.isLoggedIn
                }
            };
        default:
            return state;
    }
}


export const updateLogin = (userName, isLoggedIn) => {
    console.log(userName, isLoggedIn);
    return {
        type: UPDATE_USER_ASYNC,
        payload: {
            userName,
            isLoggedIn
        },
    };
};

export default login;