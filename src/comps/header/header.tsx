import React from "react";
import './header.scss';
import Logo from '../../assets/svg/logo.svg';
import Search from '../../assets/svg/search-icon.svg';
import Messages from '../../assets/svg/messages-ico.svg';
import Notifications from '../../assets/svg/notification-ico.svg';
import {useNavigate} from "react-router";

const Header: React.FC<any> = (props) => {

    const navigate = useNavigate()
    const authText = 'Войти';
    const onSearch = ()=>{
        console.log('search!')
    }

    return <header className="header">
        <div className="left">
            <div className="menu">
                <div className="menu_icon">
                    <span className="icon_line"></span>
                    <span className="icon_line"></span>
                    <span className="icon_line"></span>
                </div>
                <div className="menu_text">Меню</div>
            </div>
            <div className="logo" onClick={()=>{navigate("/")}}>
                <img src={Logo} alt="logo" className="logo_icon"/>
            </div>

            <div className="search">
                <input type="text" className="search-input" placeholder='Поиск...'/>
                <button className="search-button" onClick={onSearch}>
                    <img src={Search} alt="" className="search-icon"/>
                </button>
            </div>
        </div>
        <div className="right">
            <div className="help"  onClick={()=>{navigate("/help")}}>
                Help
            </div>
            <div className="notifications">
                <img src={Notifications} alt="" className="notification-icon"/>
            </div>
            <div className="messages">
                <img src={Messages} alt="" className="messages-icon"/>
            </div>
            <div className="login" onClick={()=>{navigate("/authorization")}}>
                {authText}
            </div>
        </div>
    </header>


};

export default Header;