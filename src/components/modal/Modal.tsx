interface ModalProperties {
    id: string;
    title: string;
    text: string;
    actions: Array<any>;
}
export function Modal({id, title, text, actions}: ModalProperties) {
    return (
        <div id={id} className="modal">
            <div className="modal-content">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
            <div className="modal-footer">
                {
                    actions.map((action) => (
                        <button
                            className="modal-close waves-effect waves-green btn-flat"
                            onClick={action.onClickHandler}>
                                {action.text}
                        </button>
                    ))
                }
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </div>
    );
}