export default class Entity {
    constructor() {
        this.components = [];
    }

    update() {
        this.components.forEach(function(component) {
            component.update();
        });
    }
}