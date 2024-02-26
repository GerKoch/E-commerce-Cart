import { useState, useEffect } from "react";
import { CardProds } from "../../components/cardProds/CardProds";
import "./Products.css";

export const Products = () => {
    const apiUrl = "https://fakestoreapi.com/products";

    const [prods, setProds] = useState([]);
    const [search, setSearch] = useState("");
    const [showProds, setshowProds] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(apiUrl)
            .then(resp => resp.json())
            .then(resp => {
                console.log("Api:", resp);
                setProds(resp);
                setshowProds(resp);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value);
        filtered(e.target.value);
        console.log(e.target.value);
    }

    const filtered = (searchTerm) => {
        const searchResult = prods.filter(el => {
            if (el.title
                .toString()
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
                return el;
            }
        });
        setshowProds(searchResult);
    }

    return (
        <div>
            <div className="containerInput">
                <div>
                    <input className="input"
                        placeholder="Buscar"
                        value={search}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="prods">
                {loading && <p>loading...</p>}
                {showProds.length > 0 &&
                    !loading &&
                    showProds.map(res =>
                        <CardProds
                            key={res.id}
                            data={res}
                        />
                    )}
            </div>
        </div>
    )
}