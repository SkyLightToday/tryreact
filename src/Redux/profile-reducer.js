const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Привет! Как дела?', likesCount: 32},
        {id: 2, message: 'Это мой первый пост.', likesCount: 47},
      ],
    newPostText: 'Я вас люблю, котятки!',
    profile: null,//
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5, message: state.newPostText, likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';//зануление.очистка поля ввода
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
            default:
                return state;
    }
  //тут он изменил на return, я не стала-и так всё работает
};

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})//updatePostActionCreator
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;