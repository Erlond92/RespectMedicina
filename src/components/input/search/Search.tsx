import style from './Search.module.scss'
import SearchIcon from '../../../img/search.svg?react';

export const Search = () => {
    // @ts-ignore
    const onClick = (e) => {
        if (e.target.value == e.target.defaultValue) {
            e.target.value = '';
        }
    };

    // @ts-ignore
    const onBlur = (e) => {
        if (e.target.value == '') {
            e.target.value = e.target.defaultValue;
        }
    };
    return (
        <div className={style.Search}>
            <input
                type="text"
                defaultValue={'Поиск...'}
                onClick={onClick}
                onBlur={onBlur}
            />
            <button>
                <SearchIcon />
            </button>
        </div>
    );
};