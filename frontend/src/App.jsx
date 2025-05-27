import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div
      data-theme="coffee"
      className="relative min-h-screen w-full  flex flex-col"
    >
      {/* Coffee-themed radial background */}
      <div className="absolute inset-0 -z-10 h-full w-full blur-sm opacity-80   [background:radial-gradient(120%_120%_at_50%_20%,#1c0f0a_40%,#3e2723_70%,#d6ad6080_100%)]" />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/note/:id" element={<NoteDetailPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
