
import { notification } from "antd";

    const openNotification = ({message,description}) => {
        notification.open({
            key:"updatable",
            message:message,
            description: description,
        });
    };


export default openNotification