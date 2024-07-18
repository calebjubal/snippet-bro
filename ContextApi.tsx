"use client"

import React, { createContext, useContext, useState } from "react";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
interface GlobalContextType {
	sideBarMenuObject: {
		sideBarMenu:SideBarMenu[];
		setSideBarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>
	};
    darkModeObject: {
		darkMode: DarkModeType[];
		setDarkMode: React.Dispatch<React.SetStateAction<DarkModeType[]>>
	};
    openSideBarObject: {
		openSideBar: boolean;
		setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>
	};
}

interface SideBarMenu {
	id:number
	name: string;
	isSelected: boolean;
	icons: React.ReactNode;
}

interface DarkModeType {
	id:number
	icon: React.ReactNode;
	isSelected: boolean;
}

const ContextProvider = createContext<GlobalContextType>({
	sideBarMenuObject: {
		sideBarMenu: [],
		setSideBarMenu: () => {},
	},
    darkModeObject: {
		darkMode: [],
		setDarkMode: () => {},
	},
    openSideBarObject: {
		openSideBar: false,
		setOpenSideBar: () => {},
	},
});

export default function GlobalContextProvider({
    children,
}:  {
    children: React.ReactNode;
}) {

    const [sideBarMenu, setSideBarMenu] = useState<SideBarMenu[]>([
        {
            id: 1,
            name: "All Snippets",
            isSelected: true,
            icons: <BorderAllIcon sx={{ fontSize: 18 }}/>,
        },
        {
            id: 2,
            name: "Favorite",
            isSelected: false,
            icons: <FavoriteBorderIcon sx={{ fontSize: 18 }}/>,
        },
        {
            id: 3,
            name: "Trash",
            isSelected: false,
            icons: <DeleteOutlineOutlinedIcon sx={{ fontSize: 18 }}/>,
        },
        {
            id: 4,
            name: "Log Out",
            isSelected: false,
            icons: <LogoutIcon sx={{ fontSize: 18 }}/>,
        },
    ]);

    const [darkMode, setDarkMode] = useState<DarkModeType[]>([
        {
            id: 1,
            icon: <LightModeIcon sx={{ fontSize: 18 }} />,
            isSelected: true,
        },
        {
            id: 2,
            icon: <DarkModeIcon sx={{ fontSize: 18 }} />,
            isSelected: false,
        },
    ]);

    const [openSideBar, setOpenSideBar] = useState(false);

    return (
        <ContextProvider.Provider
            value={{ 
                sideBarMenuObject: { sideBarMenu, setSideBarMenu },
                darkModeObject: { darkMode, setDarkMode }, 
                openSideBarObject: { openSideBar, setOpenSideBar },
            }}
        >
            {children}
        </ContextProvider.Provider>
    );
}

export const useGlobalContext = () => {
    const context = useContext(ContextProvider);
    if (!context) {
        throw new Error(
            "useGlobalContext must be used within a GlobalContextProvider"
        );
    }
    return context;
};
