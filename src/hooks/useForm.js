import { useContext, useState } from 'react';
import { ErrorContext } from '../context/ErrorContext';

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);
    const {setIsEmailCorrect} = useContext(ErrorContext);
    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
        setIsEmailCorrect(true);
    }
    


    return [values, handleInputChange];
}