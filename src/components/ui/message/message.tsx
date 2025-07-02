import React from 'react';
import style from './message.module.scss';
import YesMessage from '../../../img/yes_message.svg?react'
import NoMessage from '../../../img/no_meassage.svg?react'

interface MessageProps {
	n?: number; // Количество сообщений (по умолчанию 0)
}

export const MessageBubble: React.FC<MessageProps> = ({ n = 0 }) => {
	return (
		<div>
			{(n > 0) ? <>
				<span className={style.Message}>{n}</span>
				<YesMessage/>
			</>: <NoMessage/>}
		</div>
	);
};