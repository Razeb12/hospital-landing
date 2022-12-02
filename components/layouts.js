import React from "react";
import Banner from "./banner";
import Footer from "./footer";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children }) {
  return <div>
      <Banner />
      <Navbar />
      <main className="-mt-36 min-w-screen-full">
        {children}
      </main>
      <Footer />
    </div>;
}
