import React from "react";
import "./App.css";

function Navbar() {
  return (
    <main className="pt-4 pl-8">
      <div className="right-section">
        <div className="flex items-center space-x-2 text-gray-800">
          <i className="fas fa-solid fa-house"></i>
          <i className="fas fa-solid fa-chevron-right"></i>
          <span>Flashcard</span>
          <i className="fas fa-solid fa-chevron-right"></i>
          <span>Mathematics</span>
          <i className="fas fa-solid fa-chevron-right"></i>
          <span className="font-bold text-indigo-900">
            Relation and Function
          </span>
        </div>
      </div>
      <div className="text-lg font-bold text-indigo-900 pt-8">
        Relations and Functions (Mathematics)
      </div>
      <div className="left-section flex justify-center">
        <ul className="flex">
          <li className="nav-item ml-4 hover:cursor-pointer underline font-bold text-indigo-800">
            Study
          </li>
          <li className="nav-item ml-4 hover:underline hover:font-bold hover:text-indigo-800 hover:cursor-pointer">
            Quiz
          </li>
          <li className="nav-item ml-4 hover:underline hover:font-bold hover:text-indigo-800 hover:cursor-pointer">
            Test
          </li>
          <li className="nav-item ml-4 hover:underline hover:font-bold hover:text-indigo-800 hover:cursor-pointer">
            Game
          </li>
          <li className="nav-item ml-4 hover:underline hover:font-bold hover:text-indigo-800 hover:cursor-pointer">
            Others
          </li>
        </ul>
      </div>
      <div className="relative w-80 h-32 bg-indigo-800 m-auto rounded-2xl text-white">
        <i className="absolute top-0 left-2 mt-3 ml-2 fas fa-lightbulb"></i>
        <i className="absolute top-0 right-2 mt-3 mr-2 fas fa-volume-high"></i>
        <div className="flex justify-center items-center h-full">
          9 + 6 + 7x -2x -3
        </div>
        <div className="flex justify-center w-80 m-auto mt-2 text-indigo-900">
          <i className=" fas fa-redo-alt absolute left-2 mt-2 ml-2 rounded-full"></i>
          <i className="fas fa-chevron-left mx-2 rounded-full bg-indigo-800 text-white p-2"></i>
          <span className="mx-2 mt-1 font-bold text-black">01/10</span>
          <i className="fas fa-chevron-right rounded-full bg-indigo-800 text-white p-2"></i>
          <i className="fa-solid fa-expand absolute right-2 mt-2 ml-2 rounded-full"></i>
        </div>
      </div>
      <div>
        <h6 className="text-xs mr-10 mt-8 ">Published by</h6>
        <div className="flex justify-between items-center ">
          <div className="text-indigo-900 font-bold  text-2xl mr-3 mt-0.5">
            HyggeX
          </div>
          <div className="flex items-center">
            <i className="fas fa-plus-circle text-indigo-900 mr-3 mt-8  text-xl"></i>
            <span className="text-indigo-900 font-bold mr-10 mt-8 text-xl">
              Create Flashcard
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Navbar;
