import React from 'react';
import  './ProfileInfo.css';

const ProfileInfo = (props) => {
  if(!props.profile) {
     return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQUw7Xlvgtde1HS-1SsrAa6YL11Kuj5mRdyw&usqp=CAU" alt="#" />
  }
    return (
        <div className="App-content">
        <div className="App-content_img">
        <img src="https://dreempics.com/img/picture/Jul/14/7361c93c5b597488a18ecd8b8b6c238d/11.jpg" alt="#"/>
        </div>
         <div className="App-content_ava">
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7KJvCdzu6AXNRZvJ9Iju1YYBZK_1e5AKZg&usqp=CAU" alt="#" /> */}
          <img src={props.profile.photos.large} alt="#" />
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

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8f-4lHHNzPP7LS2uKUoURmFoIfFaEUmKOLmc0_IUk5SCfLe8kmtKFYf365Lx0yDxLbY&usqp=CAU

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7KJvCdzu6AXNRZvJ9Iju1YYBZK_1e5AKZg&usqp=CAU