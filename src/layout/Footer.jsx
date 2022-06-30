import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

function Footer() {
    return (
        <footer className="page-footer blue-grey darken-2">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            </div>
          </div>
        </footer>
    )
}

export {Footer}