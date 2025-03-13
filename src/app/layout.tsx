import { FC } from "react";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import TopMenu from "@/components/TopMenu";

const Layout: FC = ({ children }) => {
  return (
    <>
      {/* Adding <html> and <body> tags directly in layout */}
      <html lang="en">
        <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
          {/* Navbar */}
          <nav
            style={{
              display: "flex",
              justifyContent: "flex-end",  
              alignItems: "center",
              padding: "10px 20px",
              backgroundColor: "#333",
              color: "white",
            }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <a href="/app/booking" style={{ color: "white", textDecoration: "none" }}>
                Menu Item Booking
              </a>
              <a href="">
                <img
                  src="/img/logo.png" 
                  alt="Logo"
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
              </a>
            </div>
          </nav>

          {/* Main content */}
          <main>
            <Banner />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginTop: "20px",
                paddingRight: "20px",
              }}
            >
              <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg" />
              <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg" />
              <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg" />
            </div>
          </main>

          {children}
        </body>
      </html>
    </>
  );
};

export default Layout;
