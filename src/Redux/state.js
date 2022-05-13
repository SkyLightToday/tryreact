const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
          {id: 1, message: 'Привет! Как дела?', likesCount: 32},
          {id: 2, message: 'Это мой первый пост.', likesCount: 47},
        ],
      newPostText: 'Я вас люблю, котятки!',
    },

    dialogsPage: {
      dialogs: [
          {id: 1, name: 'Василий'},
          {id: 2, name: 'Маркиза'},
          {id: 3, name: 'Бэлла'},
          {id: 4, name: 'Том'},
          {id: 5, name: 'Ватсон'},
        ],
        messages: [
          {id: 1, message: 'Привет! Пойдёшь сегодня гулять по крышам?'},
          {id: 2, message: 'О, можно я с вами гулять буду'},
          {id: 3, message: 'Василий опять подрался с Ватсоном. Печально'},
          {id: 4, message: 'Сегодня в магазине продовалась вкусная колбаса!'},
          {id: 5, message: 'Ну, пойдём гулять?'},
        ],
        newMessageBody: '',
    },

    sidebar: {}


},
getState() { return this._state;},
_callSubscriber() {
  console.log("Change state");
},
subscribe(observer) {
  this._callSubscriber = observer;
},

dispatch(action) {
  if(action.type === ADD_POST) {
    let newPost = {
      id: 5, message: this._state.profilePage.newPostText, likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';//зануление.очистка поля ввода
    this._callSubscriber(this._state);
  } else if(action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
  } else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
    this._state.dialogsPage.newMessageBody = action.body;//newMessageBody(body)
    this._callSubscriber(this._state);
  } else if(action.type === SEND_MESSAGE) {
    let body = this._state.dialogsPage.newMessageBody;
    this._state.dialogsPage.newMessageBody = '';//зануление.очистка поля ввода
    this._state.dialogsPage.messages.push({id: 6, message: body});
    this._callSubscriber(this._state);
  }
},

}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT,
    newText: text,});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

  export default store;
  window.store = store;