export interface SideBarMenu {
	id: number;
	name: string;
	isSelected: boolean;
	icons: React.ReactNode;
}

export interface DarkModeType {
	id: number;
	icon: React.ReactNode;
	isSelected: boolean;
}

export interface SingleNoteType {
	id: string;
    title: string;
    isFavorite: boolean;
    tags: string[];
    description: string;
    code: string;
    language: string;
    creationDate: string;
}