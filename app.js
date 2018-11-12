var express = require("express");
var app = express();
let developers =  [
    {
        "id": 1,
        "firstName": "Jason",
        "lastName": "Monroe",
        "favoriteLanguage": "C#",
        "yearStarted": 2008,
        "imagePath": null
    },
    {
        "id": 2,
        "firstName": "Bill",
        "lastName": "Gates",
        "favoriteLanguage": "BASIC",
        "yearStarted": 1978,
        "imagePath": null
    },
    {
        "id": 4,
        "firstName": "Steve",
        "lastName": "Wozniak",
        "favoriteLanguage": "Pascal",
        "yearStarted": 1977,
        "imagePath": null
    },
    {
        "id": 49,
        "firstName": "Bon",
        "lastName": "Jovi",
        "favoriteLanguage": "C++",
        "yearStarted": 1998,
        "imagePath": null
    },
    {
        "id": 50,
        "firstName": "Bjarn",
        "lastName": "Stroustrop",
        "favoriteLanguage": "C++",
        "yearStarted": 1980,
        "imagePath": null
    },
    {
        "id": 51,
        "firstName": "sandya",
        "lastName": "palaparthy",
        "favoriteLanguage": "java",
        "yearStarted": 2007,
        "imagePath": null
    },
    {
        "id": 52,
        "firstName": "Michael",
        "lastName": "Jackson",
        "favoriteLanguage": "English",
        "yearStarted": 1970,
        "imagePath": null
    },
    {
        "id": 53,
        "firstName": "Krishna",
        "lastName": "Manthena",
        "favoriteLanguage": "Ionic",
        "yearStarted": 2018,
        "imagePath": null
    },
    {
        "id": 54,
        "firstName": "Krishna",
        "lastName": "Manthena",
        "favoriteLanguage": "Ruby On Rails",
        "yearStarted": 2010,
        "imagePath": null
    },
    {
        "id": 55,
        "firstName": "Manthena",
        "lastName": "Krishna",
        "favoriteLanguage": "ReactJs",
        "yearStarted": 2013,
        "imagePath": null
    },
    {
        "id": 56,
        "firstName": "Ramesh",
        "lastName": "Selvarasu",
        "favoriteLanguage": "PHP",
        "yearStarted": 2016,
        "imagePath": null
    },
    {
        "id": 57,
        "firstName": "Prasad",
        "lastName": "Duggirala",
        "favoriteLanguage": "Angular",
        "yearStarted": 2014,
        "imagePath": null
    },
    {
        "id": 58,
        "firstName": "Ragu",
        "lastName": "Thirumoorthy",
        "favoriteLanguage": "Angular",
        "yearStarted": 2004,
        "imagePath": null
    }
];
app.get("/users", (req, res, next) => {
  
    res.json(developers);
});

app.post("/addUser", (req, res, next) => {
  
    res.json(developers);
});
app.listen(3000, () => {
 console.log("Server running on port 3000");
});