import React from 'react';
import  './MyPosts.css';
import PostB from './PostB/PostB';

const MyPosts = () => {
  let posts = [
    {id: 1, message: 'Привет! Как дела?', likesCount: 32},
    {id: 2, message: 'Это мой первый пост.', likesCount: 47},
];

let postsElements = posts.map(p => <PostB message={p.message} likesCount={p.likesCount} />);

    return (
        <div className="mypost">
          <h2>My post</h2>
          <div className="textarea">
          <textarea></textarea>
          </div>
          <div className="mypostBtn">
          <button>Добавить пост</button>
          <button>Удалить</button>
          </div>
          <div>
            <h2>New posts</h2>
          </div>
          <div className="mypostMess">
            {postsElements}
          </div>
        </div>
    );
}

export default MyPosts;