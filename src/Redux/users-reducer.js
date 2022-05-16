const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        //  {id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9-_PKWHh4PgpZjm4VW1iPcasscBfo6nEpw&usqp=CAU', followed: true, fullname: 'Муся', status: 'В поисках кота-разбойника', location: {city: 'Москва', country: 'Россия',}},
        //  {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GZTz8xDsVLabu_bRJmmAy0vg3FlNyteyCQ&usqp=CAU', followed: false, fullname: 'Саймон', status: 'Дегустация рыбы', location: {city: 'Владимир', country: 'Россия',}},
        //  {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpl4k-ZesxKZbQVnD5o8jw8FMacH5UzOjDw&usqp=CAU', followed: false, fullname: 'Бос', status: 'Вызываю на бой', location: {city: 'Нур-Султан', country: 'Казахстан',}},
        //  {id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJboAeylU14Tr7UDctlD0LF5nPDNXUhxtbg&usqp=CAU', followed: true, fullname: 'Фрося', status: 'В ожидании котяток', location: {city: 'Минск', country: 'Беларусь',}},
    ]
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users]-одно и тоже
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                }),
            }

        case UNFOLLOW:
            return {
                ...state,
                // users: [...state.users]-одно и тоже
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                }),
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]};
        }

        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;