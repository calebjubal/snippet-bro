"use client"

import React, { createContext, useContext, useEffect, useState } from "react";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { DarkModeType, SideBarMenu, SingleNoteType } from "./app/Types";
interface GlobalContextType {
	sideBarMenuObject: {
		sideBarMenu: SideBarMenu[];
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
    openContentNoteObject: {
		openContentNote: boolean;
		setOpenContentNote: React.Dispatch<React.SetStateAction<boolean>>
	};
    isMobileObject: {
		isMobile: boolean;
		setIsMobile: React.Dispatch<React.SetStateAction<boolean>>
	};
    allNotesObject: {
		allNotes: SingleNoteType[];
		setAllNotes: React.Dispatch<React.SetStateAction<SingleNoteType[]>>
	};
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
    openContentNoteObject: { 
        openContentNote: false, 
        setOpenContentNote: () => {},
    },
    isMobileObject: { 
        isMobile: false, 
        setIsMobile: () => {},
    },
    allNotesObject: { 
        allNotes: [], 
        setAllNotes: () => {},
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
    const [openContentNote, setOpenContentNote] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [allNotes, setAllNotes] = useState<SingleNoteType[]>([]);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 640);
    };

    useEffect(() => {
        handleResize;

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        };
    }, [])

    return (
        <ContextProvider.Provider
            value={{ 
                sideBarMenuObject: { sideBarMenu, setSideBarMenu },
                darkModeObject: { darkMode, setDarkMode }, 
                openSideBarObject: { openSideBar, setOpenSideBar },
                openContentNoteObject: { openContentNote, setOpenContentNote },
                isMobileObject: { isMobile, setIsMobile },
                allNotesObject: { allNotes, setAllNotes },
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
