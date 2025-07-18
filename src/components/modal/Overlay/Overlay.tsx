import Modal from "@/components/modal/Modal.tsx";
import style from './Overlay.module.scss';

type Props = {
	children: React.ReactNode
	onClose: () => void,
}

export const Overlay = (props: Props) => {
	return <Modal>
		<div className={style.Overlay} onClick={props.onClose}>
			<div onClick={(e) => e.stopPropagation()}>
				{ props.children }
			</div>
		</div>
	</Modal>
}