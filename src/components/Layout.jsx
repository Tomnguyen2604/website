import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <main className="main-content">
                {children}
            </main>
        </div>
    );
};

export default Layout;
