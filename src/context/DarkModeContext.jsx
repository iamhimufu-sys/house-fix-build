import React, { createContext, useContext, useState, useEffect } from 'react'

const DarkModeContext = createContext()

export const useDarkMode = () => {
    const context = useContext(DarkModeContext)
    if (!context) {
        throw new Error('useDarkMode must be used within DarkModeProvider')
    }
    return context
}

export const DarkModeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('darkMode')
        return saved ? JSON.parse(saved) : false
    })

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDark))
        if (isDark) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [isDark])

    const toggleDarkMode = () => setIsDark(!isDark)

    return (
        <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}
