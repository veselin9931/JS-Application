import controllers from "../controllers/index.js";

const app = Sammy('#root', function(){

    this.use('Handlebars', 'hbs');

    //Home
    this.get('#/home', controllers.home.get.home);
    
    //User

    //Trek

});

(() => {
    app.run('#/home');
})();