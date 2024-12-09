"use client";

import React, { useRef } from "react";

function Explore() {
  const pmfbyRef = useRef(null);
  const weatherBasedRef = useRef(null);
  const revenueProtectionRef = useRef(null);
  const marketRiskInsuranceRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.8",
        background: "linear-gradient(120deg, #e8f0fe 0%, #d4e6fc 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Page Title */}
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#3c3c3c",
          fontSize: "2.5rem",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
        }}
      >
        Crop Insurance Policies
      </h1>

      {/* Introduction Section */}
      <div
        style={{
          marginBottom: "30px",
          fontSize: "16px",
          color: "#3c3c3c",
          background: "rgba(240, 240, 240, 0.8)",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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
        <h2 style={{ marginBottom: "10px", color: "#3c3c3c" }}>
          Explore Insurance Schemes
        </h2>
        <ul style={{ listStyleType: "none", paddingLeft: "0", fontSize: "16px", color: "#3c3c3c" }}>
          {[
            { label: "PMFBY (Pradhan Mantri Fasal Bima Yojana)", ref: pmfbyRef },
            { label: "Weather-Based Insurance", ref: weatherBasedRef },
            { label: "Revenue Protection Policies", ref: revenueProtectionRef },
            { label: "Market Risk Insurance", ref: marketRiskInsuranceRef },
          ].map((item, index) => (
            <li
              key={index}
              style={{
                cursor: "pointer",
                marginBottom: "10px",
                color: "#4a90e2",
                transition: "color 0.3s ease, transform 0.3s ease",
              }}
              onClick={() => scrollToSection(item.ref)}
              onMouseOver={(e) => (e.target.style.color = "#003c8f")}
              onMouseOut={(e) => (e.target.style.color = "#4a90e2")}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Insurance Schemes Detailed Sections */}
      <div>
        {[
          {
            ref: pmfbyRef,
            title: "PMFBY (Pradhan Mantri Fasal Bima Yojana)",
            image: "https://c0.wallpaperflare.com/preview/154/907/657/paddy-field-paddy-crop-agriculture-paddy.jpg",
            description: (
              <p>
                PMFBY (Pradhan Mantri Fasal Bima Yojana) is a government-supported crop
                insurance scheme launched in 2016 to ensure financial security for
                Indian farmers against natural disasters, pests, diseases, and crop
                failures. Designed to be affordable, the scheme offers premium rates of
                2% for kharif crops and 1.5% for rabi crops, making it accessible to all
                farmers. PMFBY provides area-based risk coverage for losses caused by
                regional disasters like floods and droughts, offers quick financial
                payouts during crop failure, and ensures ease of enrollment through
                both online and offline registration. The scheme primarily targets
                small and marginal farmers, with or without crop loans.
                <br />
                PMFBY promotes financial inclusion by offering timely financial
                assistance, reducing farmers' dependence on informal credit, and
                empowering them to recover and replant with confidence. It plays a
                vital role in ensuring agricultural stability and supporting India's
                economic growth.
              </p>
            ),
          },
          {
            ref: weatherBasedRef,
            title: "Weather-Based Insurance",
            image: "https://tse2.mm.bing.net/th?id=OIP.ongFydGgJk9z27hExkw79QHaEo&pid=Api&P=0&h=180",
            description: (
              <p>
                Weather-Based Insurance is a type of crop insurance that provides
                financial protection to farmers against losses caused by adverse
                weather conditions such as drought, floods, unseasonal rainfall, and
                other climatic changes. This insurance is designed to cover risks based
                on specific weather parameters, such as rainfall, temperature, or other
                climatic factors, rather than direct crop damage assessments.
                <br />
                Farmers can receive compensation if the weather conditions deviate
                significantly from the predetermined threshold. Weather-based insurance
                is simple to access, with payouts made quickly, ensuring timely
                financial relief during challenging agricultural seasons. It is
                especially beneficial for farmers in regions prone to unpredictable
                climate patterns, as it helps stabilize incomes and reduce financial
                uncertainty caused by weather fluctuations. This insurance promotes
                risk mitigation and strengthens farmers' confidence to engage in
                agricultural activities despite climate-related challenges.
              </p>
            )

          },
          {
            ref: revenueProtectionRef,
            title: "Revenue Protection Policies",
            image: "https://tse4.mm.bing.net/th?id=OIP.leUcEChYZIbEsnNYuhNvmAHaE8&pid=Api&P=0&h=180",
            description: (
              <p>
                Revenue Protection Policies are a type of crop insurance designed to
                safeguard farmers against financial losses resulting from a significant
                drop in crop revenue. These policies focus on ensuring compensation
                when a farmer's income falls below a certain predetermined revenue
                threshold due to factors such as production risks, market price
                fluctuations, or reduced yields.
                <br />
                Unlike traditional crop insurance, which compensates for physical
                losses to crops, revenue protection policies take into account both
                yield and market price variations. This allows farmers to mitigate
                financial risks arising from low market prices, natural disasters, or
                poor agricultural conditions. These policies are beneficial for farmers
                who depend on consistent income from their crops, as they provide a
                financial safety net to maintain stability and recover quickly after
                market shocks or crop failures. Revenue Protection Policies are vital
                tools for financial planning and stability in the face of unpredictable
                agricultural challenges.
              </p>
            ),
          },
          {
            ref: marketRiskInsuranceRef,
            title: "Market Risk Insurance",
            image: "https://wallpapercave.com/wp/wp6592172.jpg",
            description: (
              <p>
                Market Risk Insurance is a specialized type of crop insurance designed
                to protect farmers from financial losses caused by fluctuations in
                market prices. It helps to mitigate the risks associated with price
                volatility that can arise due to changes in demand, supply,
                export-import policies, or global economic trends.
                <br />
                Unlike traditional crop insurance, which primarily covers losses caused
                by natural calamities or crop failures, market risk insurance focuses
                solely on price instability. For example, if a farmer's crop is
                harvested, but market prices fall significantly due to oversupply or
                other factors, market risk insurance ensures that the farmer receives
                compensation to offset these financial losses.
                <br />
                This type of insurance provides financial security by allowing farmers
                to plan their production cycles and investments without the fear of
                unpredictable price changes. It plays a vital role in stabilizing the
                income of farmers and ensures their resilience in the ever-changing
                agricultural market landscape.
              </p>
            ),
          },
        ].map((section, index) => (
          <div
            key={index}
            ref={section.ref}
            style={{
              padding: "20px",
              background: "#ffffff",
              marginBottom: "20px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={section.image}
              alt={section.title}
              style={{ width: "200px", height: "150px", borderRadius: "10px" }}
            />
            <div>
              <h3 style={{ color: "#3c3c3c" }}>{section.title}</h3>
              <p style={{ color: "#666" }}>{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
