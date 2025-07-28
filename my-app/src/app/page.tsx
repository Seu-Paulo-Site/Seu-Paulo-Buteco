'use client';
import Navbar from './components/Navbar';
import Historia from './components/Historia';
import Horarios from './components/Horarios';

import './globals.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <Historia />
      <Horarios />
    </>
  );
}