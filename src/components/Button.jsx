import './Button.css';

export const Button = (props) => {
   return(
        <button className={`
            button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `}
         onClick={(e) => props.click && props.click(e.target.innerHTML)}
        >{props.label}</button>
   );
}