/**
 * Created by Sniazhana_Matskevich on 2/21/2017.
 */
var getUser = (id, callback) => {

    var user = {
        id: id,
        name: "Sniazhana"
    };

    setTimeout(() => {
        callback(user);
    }, 3000);

};


getUser(31, (userObject) => {
    console.log(userObject);
});