import React, { createContext, useState } from "react";


export const LoginProfilContext = createContext({
    id: "",
    firstname : "",
    lastname : "",
    photo: "",

    setLoginProfilContext: info => {}

})

const LoginProfilContextProvider = ({children}) => {
    const loginProfilState = {
        id: "",
        firstname : "",
        lastname : "",
        photo: "",

        setLoginProfilContext : info =>
        setLoginProfil (prevState => ({
            ...prevState,
            id: info.id,
            firstname : info.firstname,
            lastname : info.lastname,
            photo: info.photo,
        }))
    }

    const [loginProfil, setLoginProfil] = useState(loginProfilState)
    return (<UserProfilContext.Provider value={loginProfil}>{children}</UserProfilContext.Provider>)
}

export default LoginProfilContextProvider;