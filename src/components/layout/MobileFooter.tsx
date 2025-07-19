import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import {
	faComment,
	faEnvelope,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function MobileFooter() {
	return (
		<div className="fixed flex items-center justify-between gap-5 bottom-0 left-0 z-50 px-10 py-3 w-full rounded-t-2xl bg-blue-900 text-white shadow-md lg:hidden md:hidden">
			<Link
				className="flex flex-col items-center"
				target="_blank"
				href="https://www.facebook.com/congtyJOYFUL"
			>
				<FontAwesomeIcon
					className="w-[25px] text-white"
					icon={faFacebookMessenger}
				/>
				<div className="text-xs">Messenger</div>
			</Link>
			<Link
				className="flex flex-col items-center"
				target="_blank"
				href="https://zalo.me/0345939514"
			>
				<FontAwesomeIcon className="w-[25px] text-white" icon={faComment} />
				<div className="text-xs">Zalo</div>
			</Link>
			<Link
				className="flex flex-col items-center"
				target="_blank"
				href="https://zalo.me/0345939514"
			>
				<FontAwesomeIcon className="w-[25px] text-white" icon={faPhone} />
				<div className="text-xs">Hotline</div>
			</Link>
			<Link
				className="flex flex-col items-center"
				target="_blank"
				href="mailto:im.export02@joyfuldecor.com.vn"
			>
				<FontAwesomeIcon className="w-[25px] text-white" icon={faEnvelope} />
				<div className="text-xs">Email</div>
			</Link>
		</div>
	);
}
