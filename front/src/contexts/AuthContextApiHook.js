import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [signed, setSigned] = useState(false);
    const [user, setUser] = useState();

    useEffect(() => {
        const storagedSigned = localStorage.getItem('@RelEquip:signed');
        const storagedUser = localStorage.getItem('@RelEquip:user');

        if (storagedUser) {
            setUser(JSON.parse(storagedUser));
        }

        if (storagedSigned === 'true') {
            setSigned(true);
        } else {
            
        }

    }, []);

    const sign = async ({ email, password }) => {
        try {
            const url = 'http://127.0.0.1:5000/users/login';
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);

            const responseJson = await fetch(url, {
                method: 'post',
                body: formData,
            });

            const response = await responseJson.json();

            if (!response.message) {
                setUser(response);
                setSigned(true);
                localStorage.setItem('@RelEquip:signed', 'true');
                localStorage.setItem('@RelEquip:user', JSON.stringify(response));
            }

            return response;
        } catch (error) {
            console.error('Error:', error);
            return {};
        };
    }

    const signOut = () => {
        localStorage.clear();
        setUser(undefined);
        setSigned(false);
    }

    return <AuthContext.Provider value={{
        signed,
        user,
        sign,
        signOut,
    }}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export { AuthProvider, useAuth };