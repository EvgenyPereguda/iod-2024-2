// objects in javascript contain keys (or properties) with corresponding values
const user = {
    "first_name" : "Evgeny",
    "last_name" : "Pereguda",
    "age" : 43,
    "followers" : 987
    }

    console.log(user.first_name);
    console.log(user.age);
    console.log(user["last_name"]);

    user.followers = 1010;
    console.log(user.followers);

    user.location = "Sydney";
    console.log(user.location);