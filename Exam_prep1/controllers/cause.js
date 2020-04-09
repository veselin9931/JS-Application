import extend from "../utils/context.js"
import models from "../models/index.js"
import docModify from "../utils/doc-modify.js"

export default{
    get: {
        dashboard(context) {

             models.cause.getAll().then((response) => {
                const causes = response.docs.map(docModify);
                extend(context).then(function () {
                    context.causes = causes;
                    console.log(context);
                    this.partial("../views/cause/dashboard.hbs");
                })
            })
           
        },
        create(context) {
            extend(context).then(function () {
                this.partial("../views/cause/create.hbs");
            })
        },

        details(context) {
           const causeId = context.params.causeId;
           models.cause.get(causeId).then((response) => {
              const cause = docModify(response);
              context.cause = cause;
              console.log(cause);
              context.canDonate = cause.uid != localStorage.getItem("userId");

              extend(context).then(function(){
                  this.partial("../views/cause/details.hbs")
              })
           }).catch((e) => console.error(e));

        },
        close(context){
            const causeId = context.params.causeId;
            
            models.cause.close(causeId).then((response) => {
                context.redirect("#/home")
             }).catch((e) => console.error(e));
  
    },
    post: {
        
        create(context) {
            const data = {
                ...context.params,
                 uid: localStorage.getItem("userId"),
                  collectedFunds: 0,
                   donors: []
                }

          models.cause.create(data).then((response) => {
              context.redirect("#/cause/dashboard")
          }).catch(e => console.error(e));
        },
    }
}};