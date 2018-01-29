'use strict';

let groups = { };

class Box {

    constructor(node, from = 'closed', to = 'openned') {

        this._node = node;
        this._from = from;
        this._to = to;

    }

    getNode() {

        return this._node;

    }

    toggle() {

        let node = this._node;

        if (node.classList.contains(this._from)) {

            this.setStateTo();

        } else if (node.classList.contains(this._to)) {

            this.setStateFrom();

        } else {

            this.setStateTo();

        }

    }

    setStateFrom() {

        let node = this._node;
        node.classList.add(this._from);
        node.classList.remove(this._to);

    }

    setStateTo() {

        let node = this._node;
        node.classList.add(this._to);
        node.classList.remove(this._from);

    }

}


function StateToggle(selector, group = null, state = 'closed => opened') {

    let [from, to] = state.split(' => ');

    let nodes = document.querySelectorAll(selector);
    nodes = [].slice.call(nodes);

    nodes.forEach(node => {

        let box = new Box(node, from, to);
        box.toggle();

        if (!group) return;

        if (!groups[group]) {

            groups[group] = box;

        } else if (groups[group].getNode() === node) {

            groups[group] = null;

        } else {

            groups[group].setStateFrom();
            groups[group] = box;

        }

    });

}

window.StateToggle = StateToggle;
