import React from "react";

const Button = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    disabled = false,
}) => {
    const baseStyle = {
        fontFamily: "Raleway, sans-serif",
        fontWeight: "600",
        padding: "12px 24px",
        border: "none",
        borderRadius: "20px",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.3s ease",
        textAlign: "center",
        display: "inline-block",
        fontSize: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: variant === "primary" ? "#ffc29e" : "#f7e6c1",
        color: variant === "primary" ? "#ffffff" : "#697e91",
    };

    const hoverStyle = {
        backgroundColor: variant === "primary" ? "#f9b48a" : "#f5dab3",
        transform: "scale(1.03)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={baseStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, baseStyle)}
        >
            {children}
        </button>
    );
};

export default Button;
