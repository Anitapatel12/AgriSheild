import React from "react";

const AboutUs = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.8", color: "#333" }}>
      <h1 style={{ color: "#2c3e50", marginBottom: "10px" }}>About Us</h1>
      
      <h2 style={{ color: "#34495e", marginBottom: "5px", marginTop: "20px" }}>Who We Are</h2>
      <p>
        Our platform is dedicated to empowering farmers with the tools and knowledge they need to safeguard their agricultural endeavors.
        We strive to provide comprehensive crop insurance awareness and accessible resources for farmers across the country.
      </p>
      
      <h2 style={{ color: "#34495e", marginBottom: "5px", marginTop: "20px" }}>Our Mission</h2>
      <p>
        To simplify and enhance the accessibility of crop insurance policies while creating a platform where farmers can easily learn, 
        apply, and benefit from available insurance schemes.
      </p>
      
      <h2 style={{ color: "#34495e", marginBottom: "5px", marginTop: "20px" }}>Our Vision</h2>
      <p>
        To become the leading digital platform for crop insurance awareness, ensuring financial security for every farmer.
      </p>
      
      <h2 style={{ color: "#34495e", marginBottom: "5px", marginTop: "20px" }}>Meet the Team</h2>
      <p>
        We are a team of passionate individuals committed to making a difference in the agricultural sector. Our expertise spans technology, agriculture, and financial inclusion.
      </p>
      
      <h2 style={{ color: "#34495e", marginBottom: "5px", marginTop: "20px" }}>Contact Us</h2>
      <p>
        Have questions or need assistance? Reach out to us at{" "}
        <a href="mailto:support@cropinsurance.com" style={{ color: "#007BFF", textDecoration: "none" }}>
          support@cropinsurance.com
        </a>
      </p>
    </div>
  );
};

export default AboutUs;
