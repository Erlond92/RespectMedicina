import style from './ClinicOperator.module.scss';
import {BackButton} from "@/components/button/backButton/backButton.tsx";
import {ClinicTitle} from "@/pages/ClinicOperator/ClinicTitle/ClinicTitle.tsx";
import defaultStyle from "@/pages/defaultStyles.module.scss";
import {SideMenu} from "@/components/sideMenu/sideMenu.tsx";
import {Icons} from "@/img/icons";
import {useState} from "react";
import {Platform} from "@/pages/ClinicOperator/Platform/Platform.tsx";
import {Operator} from "@/pages/ClinicOperator/Operator/Operator.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store.ts";
import {AddButton} from "@/components/button/addButton/addButton.tsx";
import {FormOperator} from "@/components/form/FormOperator/FormOperator.tsx";
import {FormChangeOperator} from "@/components/form/FormChangeOperator/FormChangeOperator.tsx";
import {SmsState} from "@/pages/ClinicOperator/SmsState/SmsState.tsx";
import {MessageState} from "@/pages/ClinicOperator/MessageState/MessageState.tsx";

type Props = {
	clinicId: number,
}

export const ClinicOperato = (props: Props) => {
	const OperatorList = useSelector((state: RootState) => state.operatorList);
	const [ type, setType ] = useState('platforms');
	const [ visibleOperator, setVisibleOperator ] = useState(false);
	const [ visibleChange, setVisibleChange ] = useState(-1);

	type PlatformLinkType = {
		name: string,
		link: string,
	}

	const PlatformLink: PlatformLinkType[] = [
		{
			name: 'ПроДокторов', link: '#'
		},
		{
			name: 'Яндекс карты', link: '#'
		},
		{
			name: '2Gis', link: '#'
		},
		{
			name: 'Google Maps', link: '#'
		},
		{
			name: 'На поправку', link: '#'
		},
		{
			name: 'Сбер здоровье', link: '#'
		}
	]

	return <div className={defaultStyle.Page}>
		<SideMenu action={'Clinic'} />
		<div className={style.ClinicOperator}>
			<header className={style.ClinicOperator_item}>
				<div className={style.ClinicOperator__title}>
					<div className={style.ClinicOperator__title_name}>
						<BackButton returnPath={'/clinic'}/>
						<ClinicTitle clinicId={props.clinicId}/>
					</div>
					<div className={style.ClinicOperator__title_button}>
						<Icons.Change/>
						<Icons.Trash/>
					</div>
				</div>
				<div className={style.ClinicOperator__content}>
					<div>
						<p>Почта</p>
						<h1>SmileClinic@mail.ru</h1>
					</div>
					<div>
						<p>Стоимость SMS</p>
						<h1>200 ₽</h1>
					</div>
					<div>
						<p>SMS (отправлено / договор)</p>
						<h1>0/0</h1>
					</div>
					<div>
						<p>SMS (отправлено / договор)</p>
						<input type="radio"/>
					</div>
				</div>
			</header>

			<div className={style.ClinicOperator_item}>
				<div className={style.ClinicOperator__main}>
					<div className={style.ClinicOperator__main_switches}>
						<p
							className={(type == 'platforms') ? style.ClinicOperator__main_switches_select : style.ClinicOperator__main_switches_unselect}
							onClick={() => setType('platforms')}
						>Площадкм</p>
						<p
							className={(type == 'operator') ? style.ClinicOperator__main_switches_select : style.ClinicOperator__main_switches_unselect}
							onClick={() => setType('operator')}
						>Оператор</p>
						<p
							className={(type == 'sms') ? style.ClinicOperator__main_switches_select : style.ClinicOperator__main_switches_unselect}
							onClick={() => setType('sms')}
						>СМС</p>
						<p
							className={(type == 'message') ? style.ClinicOperator__main_switches_select : style.ClinicOperator__main_switches_unselect}
							onClick={() => setType('message')}
						>Сообщения</p>
					</div>

					<div className={style.ClinicOperator__main_content}>
						{ (type == 'platforms') ? PlatformLink.map((element) => {
							return <Platform name={element.name} link={element.link}/>
						}) : <></> }
						{ (type=='operator') ? <>
						{ OperatorList.map((element) => {
							return <>
								<Operator name={element.name} email={element.email} id={element.id} changeOperator={() => setVisibleChange(element.id)}/>
							</>
						}) }
							<AddButton title={'Добавить оператора'} onClose={() => setVisibleOperator(true)} width={244}/>
						{ (visibleOperator) ? <FormOperator onClose={() => setVisibleOperator(false)} isClose={visibleOperator}/> : <></> }
						{ ( visibleChange == -1 ) ? <></> : <FormChangeOperator onClose={() => setVisibleChange(-1)} isClose={!(visibleChange == -1)} id={visibleChange}/> }
						</> : <></> }
						{ (type == 'sms') ? <SmsState/> : <></> }
						{ (type == 'message') ? <MessageState/> : <></> }
					</div>
				</div>
			</div>
		</div>
	</div>
}