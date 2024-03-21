import { HeroCard } from "../components/HeroCard"
import { getHeroByName } from "../helpers/getHeroByName";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { q = "" } = queryString.parse(location.search);
    
    const { searchText, onInputChange } = useForm({
        searchText: ""
    });

    const heroes = getHeroByName(q);

    const onSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <h1>SearchPage</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />

                    <form onSubmit={onSearchSubmit}>
                        <input 
                            type="text" 
                            placeholder="Search a hero" 
                            className="form-control" 
                            name="searchText"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {q==="" && <div className="alert alert-primary">
                        Search a hero
                    </div>}

                    {heroes.length < 1 && q!=="" && (<div className="alert alert-danger">
                        No hero with <b>{ q }</b>
                    </div>)}

                    {heroes && heroes.map((hero) => <HeroCard key={hero.id} {...hero} />)}
                </div>
            </div>
        </>
    )
}
