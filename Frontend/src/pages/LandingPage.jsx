import React, { useContext, useState } from "react";
import { APP_FEATURES } from "../utils/data";
import HERO_IMG from "../../public/hero-img.png";
import { LuSparkles } from "react-icons/lu";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Modal from "../components/Loader/Modal";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard";
import { motion } from "framer-motion";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  const handleMouseMove = (e, id) => {
    const card = document.getElementById(`feature-card-${id}`);
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <>
      <div className="w-full min-h-full bg-gradient-to-br from-white to-slate-50 text-gray-800">
        <div className="w-[500px] h-[500px] bg-indigo-300/20 blur-[65px] absolute top-0 left-0" />
        <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
          <header className="flex justify-between items-center mb-16">
            <div className="text-3xl font-bold text-indigo-700">
              Interview Prep AI
            </div>
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-7 py-2.5 rounded-full transition"
                onClick={() => setOpenAuthModal(true)}
              >
                Login / SignUp
              </button>
            )}
          </header>

          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <div className="flex items-center justify-start mb-2">
                <div className="flex items-center gap-2 text-sm text-indigo-700 font-medium bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200">
                  <LuSparkles /> AI Powered
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight text-gray-900">
                Ace Interviews with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 animate-text-shine">
                  AI-Powered Learning
                </span>
              </h1>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-[17px] text-gray-700 mr-0 md:mr-20 mb-6">
                Get role-specific questions, expand answers, dive deeper into
                concepts, and organise everything your way. From preparation to
                mastery - your ultimate interview toolkit is here.
              </p>
              <button
                className="bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-700 hover:to-sky-600 text-white font-semibold px-7 py-2.5 rounded-full transition"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="flex items-center justify-center -mt-36 z-10 relative">
        <img
          src={HERO_IMG}
          alt="Hero IMG"
          className="w-[80vw] rounded-xl shadow-lg"
        />
      </section>

      <div className="w-full min-h-full bg-white mt-10">
        <div className="container mx-auto px-4 pt-10 pb-20">
          <section className="mt-5">
            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
              Features That Make You Shine
            </h2>

            <div className="flex flex-col items-center gap-8">
              {/* First 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {APP_FEATURES.slice(0, 3).map((feature) => (
                  <motion.div
                    key={feature.id}
                    id={`feature-card-${feature.id}`}
                    className="bg-slate-50 hover:bg-slate-100 p-6 rounded-xl shadow-md border border-slate-200 spotlight-card"
                    onMouseMove={(e) => handleMouseMove(e, feature.id)}
                    whileHover={{ rotateX: 5, rotateY: -5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <h3 className="text-lg font-semibold mb-2 text-indigo-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Remaining 2 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {APP_FEATURES.slice(3).map((feature) => (
                  <motion.div
                    key={feature.id}
                    id={`feature-card-${feature.id}`}
                    className="bg-slate-50 hover:bg-slate-100 p-6 rounded-xl shadow-md border border-slate-200 spotlight-card"
                    onMouseMove={(e) => handleMouseMove(e, feature.id)}
                    whileHover={{ rotateX: 5, rotateY: -5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <h3 className="text-lg font-semibold mb-2 text-indigo-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="text-sm bg-gray-100 text-gray-500 text-center p-5 mt-5">
        Made with ❤️... Happy Coding
      </footer>

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
