import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        padding: "40px 20px",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <h1
        style={{
          color: "#2c3e50",
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "600",
        }}
      >
        About Us
      </h1>

      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            color: "#34495e",
            fontSize: "1.75rem",
            marginBottom: "10px",
            fontWeight: "500",
          }}
        >
          Who We Are
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: "1.8",
            textAlign: "justify",
            marginBottom: "15px",
          }}
        >
          We are committed to empowering farmers with the knowledge and
          resources they need to protect their agricultural efforts. Our
          platform offers accessible crop insurance information and coverage
          options to ensure the financial security of farmers nationwide.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            color: "#34495e",
            fontSize: "1.75rem",
            marginBottom: "10px",
            fontWeight: "500",
          }}
        >
          Our Mission
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: "1.8",
            textAlign: "justify",
            marginBottom: "15px",
          }}
        >
          To provide farmers with seamless access to crop insurance policies
          and create an easily navigable platform where they can learn about,
          apply for, and benefit from relevant insurance schemes.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            color: "#34495e",
            fontSize: "1.75rem",
            marginBottom: "10px",
            fontWeight: "500",
          }}
        >
          Our Vision
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: "1.8",
            textAlign: "justify",
            marginBottom: "15px",
          }}
        >
          To become the leading digital platform for crop insurance
          awareness, ensuring that every farmer has the tools and security they
          need to thrive in the face of uncertainty.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            color: "#34495e",
            fontSize: "1.75rem",
            marginBottom: "10px",
            fontWeight: "500",
          }}
        >
          Meet the Team
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: "1.8",
            textAlign: "justify",
            marginBottom: "15px",
          }}
        >
          Our team comprises passionate professionals with expertise in
          technology, agriculture, and financial inclusion. Together, we are
          working towards making a positive impact in the agricultural sector.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            color: "#34495e",
            fontSize: "1.75rem",
            marginBottom: "10px",
            fontWeight: "500",
          }}
        >
          Contact Us
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: "1.8",
            textAlign: "justify",
            marginBottom: "15px",
          }}
        >
          Have questions or need assistance? Feel free to reach out to us via
          email at{" "}
          <a
            href="mailto:support@cropinsurance.com"
            style={{
              color: "#007BFF",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            support@cropinsurance.com
          </a>
          . We're here to help!
        </p>
      </section>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <p
          style={{
            fontSize: "1rem",
            color: "#7f8c8d",
            marginBottom: "0",
          }}
        >
          © 2024 Crop Insurance Platform. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
