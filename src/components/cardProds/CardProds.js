import "./CardProds.css";
import "boxicons";
import { AddSubtract } from "../../utils/addSubtract/AddSubtract";

 export const CardProds = ({ data }) => {

    return (
        <div>
            <div className="container">furtherutils
                <p>{data.title}</p>
                <img alt={data.title} src={data.image} />
                <box-icon name='heart' className="cardHeart"></box-icon>
                <div className="bubble">
                    <p>${data.price}</p>
                </div>
                <AddSubtract
                    data={data} />
            </div>
        </div>
    )
}