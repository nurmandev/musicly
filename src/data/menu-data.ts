
type TSubmenu = {
    title: string;
    link: string
}

type TMegaManu = {
    title: string;
    link: string
    submenus: TSubmenu[]
}

interface TMenuItem {
    menuItem?: any;
    active?: string;
    id: number;
    hasDropdown?: boolean;
    title: string;
    link: string;
    submenus?: any[];
    pages?: boolean;
    megaMenu?: boolean;
    mega_menus?: TMegaManu[];
}
const menu_data: TMenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "#",
        hasDropdown: false
    },
    {
        id: 2,
        hasDropdown: false,
        title: "About us",
        link: "/about",
    },
    {
        id: 3,
        hasDropdown: false,
        title: "How It Works",
        link: "/work-system",
    },
    {
        id: 6,
        hasDropdown: false,
        title: "Contact us",
        link: "/contact",
    },
]

export default menu_data;