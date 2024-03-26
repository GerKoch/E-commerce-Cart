import "./CardProds.css";
import "boxicons";
import { AddSubtract } from "../../utils/addSubtract/AddSubtract";

export const CardProds = ({ data }) => {

    return (
        <div>
            <div className="container">
                <figure className="containerImg">
                    <img alt={data.title} src={data.image} />
                </figure>
                <p>{data.title}</p>
                <div className="bubble">
                    <p>${data.price}</p>
                </div>
                <AddSubtract
                    data={data} />
            </div>
        </div>
    )
}