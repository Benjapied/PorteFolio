import { createContext, useContext, useState, useEffect } from "react";

const enumLanguages = {
    FR: "francais",
    EN: "anglais"
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("language") || enumLanguages.FR;
    });

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prevLang) =>
            prevLang === enumLanguages.FR ? enumLanguages.EN : enumLanguages.FR
        );
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
