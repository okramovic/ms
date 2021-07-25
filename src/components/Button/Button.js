export const Button = ({label, className, onClick, children, disabled,
    ariaLabel
}) =>(

        <button 
            onClick={onClick || (()=>{})} 
            className={className || ""}
            disabled={disabled || false}
            aria-label={ariaLabel}
            >
                {label || children}
        </button>
)