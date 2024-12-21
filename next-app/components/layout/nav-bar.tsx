import ThemeSwitch from "../ui/theme-switch";

const NavBar = () => {
    return (
        <nav className="w-full h-[48px] bg-red flex flex-row items-center justify-between">
            <p>WA</p>
            <div>
                <ThemeSwitch />
            </div>
        </nav>
    )
}

export default NavBar;