import models from "../models/index.js"
import extend from '../utils/context.js'

export default {
    get: {
        create(context){
            extend(context).then(function(){
                this.partial("../views/trek/create.hbs");
            });
        }
    }
}