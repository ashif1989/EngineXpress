import React, { useState } from "react";
import { Card, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "antd/dist/reset.css";

const { Title, Paragraph } = Typography;

const Welcome = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundImage: "url('/images/bg3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Button
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          backgroundColor: "#1890ff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "10px 20px",
          fontSize: "16px",
          zIndex: 10,
        }}
        onClick={handleLogin}
      >
        Login
      </Button>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          zIndex: 1,
        }}
      ></div>

      <Card
        style={{
          maxWidth: "900px",
          minWidth: "500px",
          width: "100%",
          textAlign: "left",
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          marginTop: "-10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          {/* Image */}
          <img
            src="/images/EngineXpress-logo.png"
            alt="EngineXpress"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "contain",
              flexShrink: 0,
            }}
          />

          {/* Text - Ensures wrapping inside card */}
          <div style={{ flex: 1, minWidth: "300px" }}>
            <Title
              level={1}
              style={{
                background: "linear-gradient(90deg, #1890ff, #8a2be2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                margin: 0,
                maxWidth: "100%",
                wordWrap: "break-word",
              }}
            >
              Save{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #8a2be2, #ff00ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                100s
              </span>{" "}
              of development hours and{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #8a2be2, #ff00ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                1000s
              </span>{" "}
              of development dollars
            </Title>
          </div>
        </div>
      </Card>

      {/* Second Card - Centered Text */}
      <Card
        style={{
          maxWidth: "800px",
          width: "100%",
          textAlign: "center",
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      >
        <Paragraph style={{ fontSize: "16px", color: "black" }}>
          <strong>EngineXpress</strong> is a Pratt & Whitney NCLC platform that
          saves engineers time and energy building apps that integrate with any
          data source and speed up any process.
        </Paragraph>
      </Card>
    </div>
  );
};

export default Welcome;
