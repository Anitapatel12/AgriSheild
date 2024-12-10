"use client";

import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import React, { useRef } from "react";

function Explore() {
  const pmfbyRef = useRef(null);
  const weatherBasedRef = useRef(null);
  const revenueProtectionRef = useRef(null);
  const marketRiskInsuranceRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigation = () => {
    window.location.href = './client.html'; // Relative path to your HTML file
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "'Roboto', sans-serif",
        lineHeight: "1.8",
        background: "linear-gradient(120deg, #e8f0fe 0%, #d4e6fc 100%)",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* Page Title */}
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#2c3e50",
          fontSize: "3rem",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
          fontWeight: "700",
        }}
      >
        Crop Insurance Policies
      </h1>

      {/* Introduction Section */}
      <div
        style={{
          marginBottom: "30px",
          fontSize: "16px",
          color: "#34495e",
          background: "rgba(240, 240, 240, 0.9)",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <p>
          Crop insurance schemes are essential tools that help farmers protect themselves against financial risks caused by
          natural calamities, crop failure, and other unforeseen events. These insurance policies provide financial relief
          and ensure that farmers can continue their agricultural activities without disruptions.
        </p>
      </div>

      {/* Navigation List */}
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ marginBottom: "15px", color: "#2c3e50", fontSize: "1.75rem" }}>
          Explore Insurance Schemes
        </h2>
        <ul style={{ listStyleType: "none", paddingLeft: "0", fontSize: "16px", color: "#34495e" }}>
          {[{
            label: "PMFBY (Pradhan Mantri Fasal Bima Yojana)",
            ref: pmfbyRef
          }, {
            label: "Weather-Based Insurance",
            ref: weatherBasedRef
          }, {
            label: "Revenue Protection Policies",
            ref: revenueProtectionRef
          }, {
            label: "Market Risk Insurance",
            ref: marketRiskInsuranceRef
          }].map((item, index) => (
            <li
              key={index}
              style={{
                cursor: "pointer",
                marginBottom: "15px",
                color: "#3498db",
                transition: "color 0.3s ease, transform 0.3s ease",
                fontWeight: "500",
              }}
              onClick={() => scrollToSection(item.ref)}
              onMouseOver={(e) => (e.target.style.color = "#2980b9")}
              onMouseOut={(e) => (e.target.style.color = "#3498db")}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

     

      {/* Insurance Schemes Detailed Sections */}
      <div>
        {[{
            ref: pmfbyRef,
            title: "PMFBY (Pradhan Mantri Fasal Bima Yojana)",
            image: "https://c0.wallpaperflare.com/preview/154/907/657/paddy-field-paddy-crop-agriculture-paddy.jpg",
            description: (
              <p>
                PMFBY is a government-supported crop insurance scheme launched in 2016 to ensure financial security for Indian farmers against natural disasters, pests, diseases, and crop failures.
              </p>
            ),
          }, {
            ref: weatherBasedRef,
            title: "Weather-Based Insurance",
            image: "https://tse2.mm.bing.net/th?id=OIP.ongFydGgJk9z27hExkw79QHaEo&pid=Api&P=0&h=180",
            description: (
              <p>
                Weather-Based Insurance protects farmers against losses caused by adverse weather conditions such as drought, floods, and unseasonal rainfall.
              </p>
            ),
          },
          {
            ref: revenueProtectionRef,
            title: "Revenue Protection Policies",
            image: "https://tse4.mm.bing.net/th?id=OIP.leUcEChYZIbEsnNYuhNvmAHaE8&pid=Api&P=0&h=180",
            description: (
              <p>
                Revenue Protection Policies safeguard farmers against financial losses resulting from a significant drop in crop revenue.
              </p>
            ),
          },
          {
            ref: marketRiskInsuranceRef,
            title: "Market Risk Insurance",
            image: "https://wallpapercave.com/wp/wp6592172.jpg",
            description: (
              <p>
                Market Risk Insurance helps farmers mitigate financial risks caused by price volatility due to changes in demand or supply.
              </p>
            ),
          }].map((section, index) => (
          <div
            key={index}
            ref={section.ref}
            style={{
              padding: "25px",
              background: "#ffffff",
              marginBottom: "30px",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
              transition: "transform 0.3s ease",
              overflow: "hidden",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={section.image}
              alt={section.title}
              style={{
                width: "250px",
                height: "180px",
                borderRadius: "15px",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
            />
            <div>
              <h3 style={{ color: "#2c3e50", fontSize: "1.75rem" }}>{section.title}</h3>
              <div style={{ color: "#7f8c8d", fontSize: "1.125rem" }}>{section.description}</div>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
}

export default Explore;
