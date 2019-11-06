export const verDataFb = (string) => {
   return firebase.firestore().collection(string).get();
};

export const guardarPedidos = (arrObj) => {
   return firebase.firestore().collection('Pedidos').add(arrObj);
}

// export const readPosts = (callback) => {
//    firebase.firestore().collection('catálogo').onSnapshot((datos) => {
//      const array = [];
//      datos.forEach((doc) => {
//        array.push({ id: doc.id, ...doc.data() });
//      });
//      callback(array);
//    });
// };
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