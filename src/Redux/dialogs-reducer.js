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
    let stateCopy;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy = {...state, newMessageBody: action.body};//{...state, messages: [...state.messages]};
            //stateCopy.newMessageBody = action.body;
            return stateCopy;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            stateCopy = {...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
            return stateCopy;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;