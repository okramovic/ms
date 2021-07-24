export const Button = ({label, className, onClick, children, disabled}) =>(

        <button 
            onClick={onClick || (()=>{})} 
            className={className || ""}
            disabled={disabled || false}
            >
                {label || children}
        </button>
)