import { useState } from "react";
import { AddCategory, GridGif } from "./components";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory={onAddCategory} />

            {
                categories.map( category => (
                    <GridGif key={category} category={category}/>
                ))
            }
        </>
    )
}

export default GifExpertApp;
