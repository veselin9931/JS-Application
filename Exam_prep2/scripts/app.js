import controllers from "../controllers/index.js";

const app = Sammy('#root', function(){

    this.use('Handlebars', 'hbs');

    //Home
    this.get('#/home', controllers.home.get.home);
    
    //User
    this.get('#/register', controllers.user.get.register);
    this.get('#/login', controllers.user.get.login);
    //Trek

});

(() => {
    app.run('#/home');
})();