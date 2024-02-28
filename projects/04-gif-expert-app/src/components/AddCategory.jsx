import { useState } from 'react';
import PropTypes from 'prop-types';

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
        <form onSubmit={handleOnSubmit} aria-label="form">
            <input 
                type="text" 
                placeholder="Buscar gifs" 
                value={inputValue} 
                onChange={handleOnChange} 
            />
        </form>
    );
};

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired
}

export default AddCategory
