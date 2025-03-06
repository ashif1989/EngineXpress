import React, { useState, useRef } from "react";
import { Card, Button, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const newTabRef = useRef(null); // Persistent reference

  const handleLogin = () => {
    setLoading(true);
    setLoginMessage("Logging in via SSO...");

    setTimeout(() => {
      setLoading(false);

      if (!newTabRef.current || newTabRef.current.closed) {
        // Open the tab immediately
        newTabRef.current = window.open(
          "https://app.appsmith.com/app/my-first-application/page1-67c69e40f6e7196b1a2628a8/edit/widgets/0",
          "_blank"
        );
      } else {
        newTabRef.current.focus(); // Focus existing tab
      }
    }, 5000);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundImage: loading ? "none" : "url('/images/bg4.jpg')",
        backgroundColor: loading ? "#ffffff" : "transparent",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!loading && (
        <>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          ></div>

          {/* Login Card */}
          <Card
            style={{
              position: "relative",
              width: 350,
              padding: 20,
              textAlign: "center",
              background: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(8px)",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div>
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
              <Button
                type="primary"
                size="large"
                onClick={handleLogin}
                disabled={loading}
              >
                Login with SSO
              </Button>
            </div>
          </Card>
        </>
      )}

      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <img
            src="/images/favicon_EngineXpress.png"
            alt="Loading Logo"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
              marginBottom: "10px",
              animation: "float 2s ease-in-out infinite",
            }}
          />

          <div
            style={{
              marginTop: "5px",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#1890ff",
            }}
          >
            {loginMessage}
          </div>

          <style>
            {`
            @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-50px); } /* Moves up slightly */
                100% { transform: translateY(0px); } /* Moves back down */
            }
            `}
          </style>
        </div>
      )}
    </div>
  );
};

export default Login;
