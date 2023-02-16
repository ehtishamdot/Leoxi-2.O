import React from "react";

import { AiFillHome } from "react-icons/ai";
import { GiTrade } from "react-icons/gi";

export const SidebarData = [
  {
    title: "Home",
    path: "/landing",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Trade",
    path: "/trade",
    icon: <GiTrade />,
    cName: "nav-text",
  },
];
