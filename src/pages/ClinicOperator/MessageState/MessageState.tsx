import style from './MessageState.module.scss';

export const MessageState = () => {
	return <div className={style.Message}>
		<div className={style.Message__item}>
			<h1>Приветствие</h1>

			<textarea name="sms" id="sms"></textarea>

			<div className={style.Message__item__content}>
				<textarea name="sample" id="sample"></textarea>
				<textarea name="final" id="final"></textarea>
			</div>

			<h5>*длина СМС без учета имени пациента и сгенерированной ссылки</h5>

			<button type={'button'} className={style.Message__item_button}>
				Сохранить
			</button>
		</div>
		<div className={style.Message__item}>
			<h1>Негативный отзыв</h1>

			<textarea name="sms" id="sms" ></textarea>

			<div className={style.Message__item__content}>
				<textarea name="sample" id="sample"></textarea>
				<textarea name="final" id="final"></textarea>
			</div>

			<button type={'button'} className={style.Message__item_button}>
				Сохранить
			</button>
		</div>
	</div>
}