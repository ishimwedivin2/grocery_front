import React from "react";

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contact Us</h2>
      <div style={styles.contactInfo}>
        <h3 style={styles.contactTitle}>Get in Touch</h3>
        <p><strong>Name:</strong> Ishimwe Divin</p>
        <p><strong>Email:</strong> ishimwedivin2@gmail.com</p>
        <p><strong>Phone:</strong> +250 788 955 906</p>
        <p><strong>Address:</strong> Kigali, Rwanda</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    lineHeight: "3.6",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  contactInfo: {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    border: "1px solid #ccc",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  contactTitle: {
    marginBottom: "10px",
    color: "#333",
    textAlign: "center",
    fontSize: "1.5em",
    fontWeight: "bold",
  },
  contactDetails: {
    textAlign: "left",
    fontSize: "1em",
    color: "#555",
    lineHeight: "1.8",
  },
};

export default ContactUs;
