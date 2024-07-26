import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div
      className="flex-initial flex justify-content-center p-3 flex-column justify-content-between"
      style={{ backgroundColor: "var(--bluegray-900)" }}
    >
      <Avatar
        label="RS"
        size="large"
        shape="circle"
        style={{ backgroundColor: "var(--teal-600)" }}
      />
      <ul className="list-none p-0 m-0 flex flex-column gap-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full border-1 border-primary surface-ground text-primary"
                : "p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full border-1 border-primary bg-primary text-primary"
            }
            style={{
              textDecoration: "none",
            }}
          >
            <i className="pi pi-home" style={{ fontSize: "1.2rem" }}></i>
            <Ripple />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive
                ? "p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full border-1 border-primary surface-ground text-primary"
                : "p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full border-1 border-primary bg-primary text-primary"
            }
            style={{
              textDecoration: "none",
            }}
          >
            <i className="pi pi-list-check" style={{ fontSize: "1.2rem" }}></i>
            <Ripple />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full border-1 border-primary surface-ground text-primary"
                : "p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full border-1 border-primary bg-primary text-primary"
            }
            style={{
              textDecoration: "none",
            }}
          >
            <i className="pi pi-desktop" style={{ fontSize: "1.2rem" }}></i>
            <Ripple />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rent"
            className={({ isActive }) =>
              isActive
                ? "p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full border-1 border-primary surface-ground text-primary"
                : "p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full border-1 border-primary bg-primary text-primary"
            }
            style={{
              textDecoration: "none",
            }}
          >
            <i className="pi pi-chart-bar" style={{ fontSize: "1.2rem" }}></i>
            <Ripple />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/config"
            className={({ isActive }) =>
              isActive
                ? "p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full border-1 border-primary surface-ground text-primary"
                : "p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full border-1 border-primary bg-primary text-primary"
            }
            style={{
              textDecoration: "none",
            }}
          >
            <i className="pi pi-cog" style={{ fontSize: "1.2rem" }}></i>
            <Ripple />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
