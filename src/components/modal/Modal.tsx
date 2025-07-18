import {createRoot} from "react-dom/client";
import React from "react";

type Props = {
	children: React.ReactNode,
}

export const Modal = (props: Props) => {
	createRoot(document.getElementById('modal')!).render(props.children);
	return <></>;
}

export default Modal;