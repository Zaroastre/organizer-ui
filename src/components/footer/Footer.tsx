export function Footer() {
    return (<footer className="page-footer black">
        <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text">Organizer Web App</h5>
                    <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </div>
                <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Links</h5>
                    <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">FaceBook</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Discord</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">YouTube</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Github</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
                © 2014 - {new Date().getFullYear()} Copyright - NIRAH-TECHNOLOGY (Nicolas METIVIER) - All Rights Reserved.
                <a className="grey-text text-lighten-4 right" href="https://nirah-technology.fr">Nirah-Technology</a>
            </div>
        </div>
    </footer>);
}