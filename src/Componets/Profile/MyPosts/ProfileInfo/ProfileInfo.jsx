import React from 'react';
import  './ProfileInfo.css';

const ProfileInfo = () => {
    return (
        <div className="App-content">
        <div className="App-content_img">
        <img src="https://99px.ru/sstorage/53/2015/05/tmb_130395_5892.jpg" alt="#"/>
        </div>
         <div className="App-content_ava">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7KJvCdzu6AXNRZvJ9Iju1YYBZK_1e5AKZg&usqp=CAU" alt="#" />
          <ul>
            <li>Имя: Мэри</li>
            <li>Дата рождения: 12.05.2010</li>
            <li>Город: Москва</li>
            <li>Профессия: Премудрая Кошка</li>
            <li>Статус: В поиске Кота-Романтика</li>
          </ul>
        </div>
      </div>
    );
}

export default ProfileInfo;