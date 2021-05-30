import React, { useState } from 'react';
import { Page } from './components/page/Page';
import { ErrorContext } from './context/ErrorContext';

export const PingApp = () => {

    const [isEmailCorrect, setIsEmailCorrect] = useState(true);
    
    return (
        <ErrorContext.Provider value={{isEmailCorrect, setIsEmailCorrect}}>
            <Page />
        </ErrorContext.Provider>
    )
}
