export default class Scene {
    constructor() {
        this.entities = [];
    }

    update() {
        //Update Entities
        this.entities.forEach(function(entity) {
            entity.update();
        });

        //Physics

        //Draw

        
    }
}