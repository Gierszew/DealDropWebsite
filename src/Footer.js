import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
        <footer>
            <div className="footer-links">
                <Link to="/terms">Terms of Service</Link>
                <Link to="/privacy">Privacy Policy</Link>
            </div>
            <p>© 2024 Deal Drop. All rights reserved.</p>
        </footer>
        </>
    )
}

export default Footer;