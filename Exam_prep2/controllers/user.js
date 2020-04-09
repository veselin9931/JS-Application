import models from "../models/index.js"
import extend from "../utils/context.js"

export default{
    get: {
        register(context){
           extend(context).then(function (){
             this.partial("../views/user/register.hbs");
           });
        },
        login(context){
           extend(context).then(function (){
            this.partial("../views/user/login.hbs");
           });
        },
        logout(){
           models.user.logout().then((response) => {
               context.redirect('#/user/login');
           })
           .catch(e => console.error(e));
        }
    },
    post: {
        register(context){
             const { username, password, rePassword } = context.params;
            
            if(password === rePassword){
              models.user.register({username, password})
                    .then((response) => {
                        context.redirect('#/user/login');
                    })
                    .catch(e => console.error(e));
            }
        },
        login(context){
            const { username, password } = context.params;

            console.log(context.params);
            models.user.login({username, password})
                .then((response) => {
                    context.redirect('#/home');
                })
                .catch(e => console.error(e));
        }
    }
}