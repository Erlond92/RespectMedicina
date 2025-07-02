import React from 'react';
import style from './message.module.scss';
import { Icons } from '@/img/icons';

interface MessageProps {
	n?: number; // Количество сообщений (по умолчанию 0)
}

export const MessageBubble: React.FC<MessageProps> = ({ n = 0 }) => {
	return (
		<div>
			{(n > 0) ? <>
				<span className={style.Message}>{n}</span>
				<Icons.YesMessageIcon/>
			</>: <Icons.NoMeassageIcon/>}
		</div>
	);
};