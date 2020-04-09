import controllers from "../controllers/index.js";

const app = Samsmy('#root', function(){

    this.use('Handlebars', 'hbs');

    //Home
    this.get('#/home', controllers.home.get.home);
    
    //User

    //Trek

});

(() => {
    app.run('#/home');
})();