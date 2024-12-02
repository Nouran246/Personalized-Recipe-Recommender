import React from "react";

const Card = ({ title, subtitle, description, children, variant = "default" }) => {
    const styles = {
        card: {
            backgroundColor: variant === "highlight" ? "#ffc29e" : "#f2f6fa",
            color: "#697e91",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            maxWidth: "300px",
            margin: "10px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
        },
        highlight: {
            backgroundColor: "#ffc29e",
            color: "#ffffff",
        },
        cardHover: {
            transform: "translateY(-5px)",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
        },
        title: {
            fontFamily: "'Caveat Brush', cursive",
            fontSize: "1.5rem",
            margin: "10px 0",
        },
        subtitle: {
            fontSize: "1rem",
            fontWeight: "bold",
            margin: "10px 0",
        },
        description: {
            fontSize: "0.9rem",
            margin: "10px 0",
        },
        children: {
            marginTop: "20px",
        },
    };

    return (
        <div
            style={styles.card}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.cardHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.card)}
        >
            <h3 style={styles.title}>{title}</h3>
            <p style={styles.subtitle}>{subtitle}</p>
            <p style={styles.description}>{description}</p>
            <div style={styles.children}>{children}</div>
        </div>
    );
};

export default Card;
