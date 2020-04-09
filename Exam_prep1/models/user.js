export default{
    register(data){
      
    const {username, password} = data;
     return firebase.auth().createUserWithEmailAndPassword(username, password);
    },
    login(data){
    const {username, password} = data;
     return firebase.auth().signInWithEmailAndPassword(username, password);
    },
    logout(data){
      return firebase.auth().signOut();
    }
}