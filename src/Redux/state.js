// let posts = [
//     {id: 1, message: 'Привет! Как дела?', likesCount: 32},
//     {id: 2, message: 'Это мой первый пост.', likesCount: 47},
//   ];

//   let dialogs = [
//     {id: 1, name: 'Василий'},
//     {id: 2, name: 'Маркиза'},
//     {id: 3, name: 'Бэлла'},
//     {id: 4, name: 'Том'},
//     {id: 5, name: 'Ватсон'},
//   ];

//   let messages = [
//     {id: 1, message: 'Привет! Пойдёшь сегодня гулять по крышам?'},
//     {id: 2, message: 'О, можно я с вами гулять буду'},
//     {id: 3, message: 'Василий опять подрался с Ватсоном. Печально'},
//     {id: 4, message: 'Сегодня в магазине продовалась вкусная колбаса!'},
//     {id: 5, message: 'Ну, пойдём гулять?'},
//   ];

  let state = {
      profilePage: {
        posts: [
            {id: 1, message: 'Привет! Как дела?', likesCount: 32},
            {id: 2, message: 'Это мой первый пост.', likesCount: 47},
          ],
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
      }


  };

  export let addPosts = (postMessage) => {
    let newPost = {
      id: 5, message: postMessage, likesCount: 0
    }
    state.profilePage.posts.push(newPost);
  };

  export default state;