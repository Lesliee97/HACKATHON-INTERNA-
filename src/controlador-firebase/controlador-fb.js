export const loginEmail = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);
export const currentUser = () => firebase.auth().currentUser;
export const verDataFb = (string) => {
   return firebase.firestore().collection(string).get();
};

export const guardarPedidos = (email, pedido, total, date) =>  firebase.firestore().collection('pedido').add({
   email: email,
   pedido: pedido,
   total: total,
   date: date,
 });


export const productos = (tipo, call) => {
   firebase.firestore().collection("catálogo").where("categoria", "==", tipo)
      // .get()
      // .then((querySnapshot) => {
         .onSnapshot((querySnapshot) => {
         const array = [];
         querySnapshot.forEach((doc) => {
            array.push({ id: doc.id, ...doc.data() })
         
         });
         call(array);

      })
      // .catch(function (error) {
      //    console.log("Error getting documents: ", error);
      // });
}

export const colaborador = (callback) => {
   return firebase.firestore().collection('colaborador').get().then((querySnapshot) => {
      const array = [];
      querySnapshot.forEach((doc) => {
         array.push({ id: doc.id, ...doc.data() })
      });
      callback(array)
   })
};