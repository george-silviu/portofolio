import "./Header.scss";

export const Header: React.FC = () => {
    return <header className="header">
        <a className="logo">Logo</a>
        <div className="nav-right">
            <a className="nav-item">About</a>
            <a className="nav-item">Skills</a>
            <a className="nav-item">Projects</a>
            <a className="nav-item">Blog</a>
            <a className="nav-item">Contact</a>
        </div>
    </header>
}