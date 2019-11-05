export const verDataFb = (string) => {
   return firebase.firestore().collection(string).get();
};

export const guardarPedidos = (arrObj) => {
   return firebase.firestore().collection('Pedidos').add(arrObj);
}

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
