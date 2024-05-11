/* eslint-disable react/prop-types */
import { useState } from "react";
import { webAppContext } from "../context";



const WebAppState = (props) => {
    const InitialWebAppState = {
        projectPopup:false,
        userProfile: {
            email: "",
            username: "", 
            phoneNumber: "",
            firstName: ""
        },
        keyboardShortcuts: {
            dashboardPage: "Control +Shift +D",
            communityPage: "Control +Shift +C",
            platformPage: "Control +Shift +P",
            crowdFundingPage: "Control +Shift +F",
        },
    }

    const [__webAppSettings, __updateWebAppSettings] = useState(InitialWebAppState);

    return (
        <webAppContext.Provider value={{ __webAppSettings, __updateWebAppSettings }}>
            {props.children}
        </webAppContext.Provider>
    )
}


export default WebAppState;