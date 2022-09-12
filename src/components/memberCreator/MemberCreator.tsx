interface MemberCreatorProperties {

}

export function MemberCreator({ }: MemberCreatorProperties) {
    return (<section>
        <form>
            <div className="row">
                <div className="col s12">
                    <div className="input-field col s2">
                        <input id="last-name" type="text" className="validate" />
                        <label htmlFor="last-name">Nom de Famille</label>
                    </div>
                    <div className="input-field col s2">
                        <input id="first-name" type="text" className="validate" />
                        <label htmlFor="first-name">Prénom</label>
                    </div>
                    <div className="input-field col s2">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <button
                            type="button"
                            className="waves-effect waves-light btn black"
                        >
                            Ajouter
                            <i className="material-icons left">add</i>
                        </button>
                </div>
            </div>
        </form>
    </section>);

}