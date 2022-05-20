// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: 1079,
    email: "dimkayo@gmail.com",
    login: "free",
    isAuth: true,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login) =>({type: SET_USER_DATA, data: {userId: userId, email: email, login: login}});//{userId, email, login}

export default authReducer;