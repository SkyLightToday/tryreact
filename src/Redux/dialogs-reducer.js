const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    if(action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;//newMessageBody(body)

      } else if(action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = '';//зануление.очистка поля ввода
        state.messages.push({id: 6, message: body});

      }


    return state;
};

// export const addPostActionCreator = () => ({type: ADD_POST});
// export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT,
//     newText: text,});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;