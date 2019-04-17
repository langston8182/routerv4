import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from '../components/todo-app';
import {shallow} from 'enzyme';

describe("Test  TodoApp fonctionnement", function () {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<TodoApp/>);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("Render le composant TodoApp sans erreur", () => {
       const div = document.createElement('Div');

       ReactDOM.render(<TodoApp/>, div);
    });

    it("Contient la chaine Nouvelle tâche", () => {
        const div = document.createElement('Div');

        ReactDOM.render(<TodoApp/>, div);

        expect(div.innerHTML).toContain("Nouvelle tâche");
    });

    it("Render le composant TodoApp sans erreur avec shallow", () => {
        expect(wrapper.html()).toContain("Nouvelle tâche");
    });

    it("Possede deux classe css row", () => {
        expect(wrapper.find('.row').length).toEqual(2);
    });

    it("Possede deux id  addButton", () => {
        expect(wrapper.find('#addButton').length).toEqual(1);
    });

    it("Change la valeur de l'input", () => {
        wrapper.find("input").simulate("change", {
            target: {value: "yo"}
        });

        expect(wrapper.find("input").prop("value")).toEqual("yo");
    });

    it("Saisie une valeur dans l'input, clic sur le bouton et verifie que le texte est dans la liste", () => {
        wrapper.find("input").simulate("change", {
            target: {value: "yo"}
        });
        wrapper.find("button").simulate("click");

        expect(wrapper.find(".list-group-item").text()).toContain("yo");
    });
});