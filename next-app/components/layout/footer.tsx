import { Icons } from "../icons/icons";

const Footer = () => {
    return (
        <footer className="flex flex-row items-center justify-center mt-[36px] py-[16px] w-full text-black dark:text-white text-center text-xs font-chakra">
            <p>Website created by Jakub Latawiec.</p>
            <a
                href="https://github.com/JakubLatawiec"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-[8px]"
                aria-label="GitHub profile"
            >
                <Icons.github className="w-[16px]"/>
            </a>
        </footer>
    )
}

export default Footer;