import messageSound from "../../tracks/message-pop.mp3";

const soundAlert = new Audio(messageSound);

const playChatSoundNotification = () => {
	soundAlert.load();
	soundAlert.play();
};

export default playChatSoundNotification;
