// src/app/layout.js
import Navbar from "../components/Navbar";
import "../styles/globals.css"; // Ensure your global styles are imported here
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />  {/* Navbar will be rendered on every page */}
        {children}  {/* Content of each page */}
        <Toaster /> {/* Add the Toaster component to render toast notifications */}
      </body>
    </html>
  );
}

