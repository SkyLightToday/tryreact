import React from 'react';
import  './MyPosts.css';
import PostB from './PostB/PostB';

const MyPosts = () => {
    return (
        <div>
          <textarea></textarea>
          <button>Добавить пост</button>
          <button>Удалить</button>
          <div>
            new post
          </div>
          <div>
            <PostB message="Привет! Как дела?" likesCount="32" />
            <PostB message="Это мой первый пост." likesCount="47" />
          </div>
        </div>
    );
}

export default MyPosts;