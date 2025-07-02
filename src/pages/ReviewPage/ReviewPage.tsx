import defaultStlye from '../defaultStyles.module.scss';
import style from './ReviewPage.module.scss';
import {SideMenu} from "../../components/sideMenu/sideMenu";
import React from "react";
import {ClinicDropDown} from "../../components/dropDown/clinicDropDown/clinicDropDown";
import {Search} from "../../components/input/search/Search";
import Download from '../../img/Download.svg?react';
import {ReviewTable} from "./ReviewTable/ReviewTable";
import {Pagination} from "../../components/ui/Pagination/Pagination";

export const ReviewPage = () => {
    return (<div className={defaultStlye.Page}>
        <SideMenu action={'Reviews'}/>

        <div className={style.ReviewPage}>
            <header>
                <h1>Отзывы</h1>
                <Search />
            </header>

            <div className={style.ReviewPage__filter}>
                <ClinicDropDown isAddress={false}/>

                <button type={'button'} className={style.ReviewPage__download}>
                    <p>XLS</p>
                    <Download/>
                </button>
            </div>
            <ReviewTable/>
            <Pagination/>
        </div>
    </div>)
}