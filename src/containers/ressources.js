import React, {Component} from 'react';
import {connect} from "react-redux";
import {addRessource} from "../actions";
import {getContainsOneList, getIntegerList, getPrimeNumberList, getSpecialNumberList} from "../selectors";

class Ressources extends Component {

    renderRessource = ressources => {
        return ressources.map(ressource => <li key={ressource}>{ressource}</li>);
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <button type="button"
                            onClick={() => this.props.addRessource()} className="btn btn-raised btn-primary">
                        Ajouter un nombre
                    </button>
                </div>
                <div className="col">
                    Entiers
                    <ul>
                        {this.renderRessource(this.props.ressourceList)}
                    </ul>
                </div>
                <div className="col">
                    Contiennent 1
                    <ul>
                        {this.renderRessource(this.props.containsOneRessources)}
                    </ul>
                </div>
                <div className="col">
                    Entiers premiers
                    <ul>
                        {this.renderRessource(this.props.primeRessources)}
                    </ul>
                </div>
                <div className="col">
                    Entiers premiers contenant 1
                    <ul>
                        {this.renderRessource(this.props.specialRessources)}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ressourceList: getIntegerList(state),
        containsOneRessources: getContainsOneList(state),
        primeRessources: getPrimeNumberList(state),
        specialRessources: getSpecialNumberList(state)
    }
};

const mapDispatchToProps = {
    addRessource
};

export default connect(mapStateToProps, mapDispatchToProps)(Ressources);