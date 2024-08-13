import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const{user,onclose} = useTelegram();


    return (
        <div className={'header'}>
            <button onClick={onClose}>Закрыть</button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    )
        ;
};

export default Header;