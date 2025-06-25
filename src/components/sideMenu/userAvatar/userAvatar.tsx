import style from './userAvatar.module.scss';

interface userProps {
    symbol: string;
}

export const UserAvatar: React.FC<userProps> = props => {
    return (<span className={style.Avatar}>{ props.symbol }</span>);
};