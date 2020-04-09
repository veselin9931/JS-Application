export  default function(context){

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              context.isLogedIn = true;
              context.username = user.email;
              context.userId = user.uid;
              localStorage.setItem('userId', user.uid);
              // ...
            } else {
              context.username = null;
              context.userId = null
              localStorage.removeItem('userId');
              context.isLogedIn = false;
            }   
          
        

    });
        return  context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        })

};   