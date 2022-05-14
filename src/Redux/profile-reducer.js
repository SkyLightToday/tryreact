const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Привет! Как дела?', likesCount: 32},
        {id: 2, message: 'Это мой первый пост.', likesCount: 47},
      ],
    newPostText: 'Я вас люблю, котятки!',
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5, message: state.newPostText, likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';//зануление.очистка поля ввода
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
            default:
                return state;
    }
    // if(action.type === ADD_POST) {
    //     let newPost = {
    //       id: 5, message: state.newPostText, likesCount: 0
    //     };
    //     state.posts.push(newPost);
    //     state.newPostText = '';//зануление.очистка поля ввода
    //   } else if(action.type === UPDATE_NEW_POST_TEXT) {
    //       state.newPostText = action.newText;
    //   }

    // return state;
};

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;