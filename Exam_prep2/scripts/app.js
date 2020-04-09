import controllers from "../controllers/index.js";

const app = Sammy('#root', function(){

    this.use('Handlebars', 'hbs');

    //Home
    this.get('#/home', controllers.home.get.home);
    
    //User
    this.get('#/user/register', controllers.user.get.register);
    this.get('#/user/login', controllers.user.get.login);

    this.post('#/user/register', controllers.user.post.register);
    this.post('#/user/login', controllers.user.post.login);

    this.get('#/user/logout', controllers.user.get.logout);
    //Trek

});

(() => {
    app.run('#/home');
})();