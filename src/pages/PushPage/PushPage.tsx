import {MainPush} from "@/pages/PushPage/MainPush/MainPush.tsx";
import {LikePush} from "@/pages/PushPage/LikePush/LikePush.tsx";
import {ClaimPush} from "@/pages/PushPage/ClaimPush/ClaimPush.tsx";
import {RespectPush} from "@/pages/PushPage/RespectPush/RespectPush.tsx";

type Props = {
	title: "Main" | 'Like' | 'Claim' | 'Respect',
	name: string,
}

export const PushPage: React.FC<Props> = (props) => {
	if (props.title == 'Main') {
		return <MainPush name={props.name} />
	} if (props.title == 'Like') {
		return <LikePush/>
	} if (props.title == 'Claim') {
		return <ClaimPush name={props.name}/>
	} if (props.title == 'Respect') {
		return <RespectPush/>
	}
}