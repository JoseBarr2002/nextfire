"use client"; // Add this directive at the top

import Image from "next/image";
import styles from "../styles/page.module.css";

import Loader from "../components/Loader";
import { toast } from 'react-hot-toast';

export default function Home() {
  return (
    <div>
      <button onClick={() => toast.success('hello toast!')}>
        Toast Me
      </button>
    </div>
  );
}
