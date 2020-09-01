import React from 'react'
import nofoto from '../assets/image/nofoto.png';

export default function ProfileUser() {
    return (
        <div>
            <div className="profile">
                <div className="profile__foto">
                    <img src={nofoto} alt="nofoto"/>
                </div>
                <div className="profile__data">
                    <p>Полное имя: <span>Иванов Иван Иванович</span></p>
                    <p>Отдел: <span>СТО</span></p>
                    <p>Email: <span>ivanov@gmail.com</span></p>
                    <p>Телефон: <span>+71234567890</span></p>
                </div>
            </div>
        </div>
    )
}
