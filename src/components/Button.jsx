import './Button.css';

export const Button = (props) => {
   return(
        <button className={`
            button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `}
         onClick={() => props.click && props.click(props.label)}
        >{props.label}</button>
   );
}