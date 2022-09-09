import "./Modal.css";
interface ModalProperties {
    id: string;
    title: string;
    content: JSX.Element;
    footer?: JSX.Element;
}
export function Modal({id, title, content, footer}: ModalProperties) {
    return (
        <>
            <div className="modal-overlay"></div>
            <div id={id} className="modal">
                <div className="modal-content">
                    <h4>{title}</h4>
                    {content}
                </div>
                <div className="modal-footer">
                    {footer}
                </div>
            </div>
        </>
    );
}