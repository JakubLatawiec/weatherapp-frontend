import Footer from "../layout/footer";
import NavBar from "../layout/nav-bar";

const PageWrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="font-russo flex min-w-screen min-h-screen flex-col py-[24px] px-[24px] items-center dark:bg-background bg-white dark:text-white text-black">
            {<NavBar />}
            <main>
                {children}
            </main>
            {<Footer />}
        </div>
    )
}

export default PageWrapper;