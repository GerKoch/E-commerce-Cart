import "./Button.css";

export const Button = ({onClick, text}) => {
    return (
        <button type="button" className="btn" onClick={onClick}>
            {text}
        </button>
    )
}