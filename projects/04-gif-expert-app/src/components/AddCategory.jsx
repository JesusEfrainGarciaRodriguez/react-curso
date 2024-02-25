import { useState } from 'react';

const AddCategory = ({onAddCategory}) => {
    const [inputValue, setInputValue] = useState("");

    const handleOnChange = ({target}) => {
        setInputValue(target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length < 1) return; 
        onAddCategory(inputValue.trim());
        setInputValue("");
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input 
                type="text" 
                placeholder="Buscar gifs" 
                value={inputValue} 
                onChange={handleOnChange} 
            />
        </form>
    );
};

export default AddCategory
