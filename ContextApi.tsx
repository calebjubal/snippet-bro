"use client"

import React, { createContext, useContext, useState } from "react";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
interface GlobalContextType {
	sideBarMenuObject: {
		sideBarMenu:SideBarMenu[];
		setSideBarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>
	};
}

interface SideBarMenu {
	id:number
	name: string;
	isSelected: Boolean;
	icons: React.ReactNode;
}

const ContextProvider = createContext<GlobalContextType>({
	sideBarMenuObject: {
		sideBarMenu: [],
		setSideBarMenu:() => {},
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
    return (
        <ContextProvider.Provider
            value={{ sideBarMenuObject: { sideBarMenu, setSideBarMenu } }}
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
