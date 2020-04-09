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
        }
    }
}