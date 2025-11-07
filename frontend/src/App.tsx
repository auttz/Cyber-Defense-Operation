import React from "react";
import { Routes, Route } from "react-router-dom";
import Defcon from "./Components/Defcon";
import MapView from "./Components/MapView";
import OverlayList from "./Components/OverlayList";
import "./index.css";

const App = () => {
  return (
    <div className="bg-black h-screen relative">
      {/* OverlayList - Fixed ซ้าย (w-60) */}
      <OverlayList />

      {/* MapView - กลาง เว้นพื้นที่ซ้าย-ขวา */}
      <div className="ml-59 mr-58 h-full">
        <MapView />
      </div>

      {/* Defcon - Fixed ขวา */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <Defcon />
      </div>
    </div>
  );
};


export default App;
