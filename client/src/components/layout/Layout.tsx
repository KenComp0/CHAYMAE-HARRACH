import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-text-primary overflow-x-hidden selection:bg-white/20">
      <Navbar />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
