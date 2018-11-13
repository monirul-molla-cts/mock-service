var express = require("express");
var bodyParser = require('body-parser')

var uuid = require('node-uuid');
var app = express();
// Import the library:
var cors = require('cors');
var app = express();
// Then use it before your routes are set up:
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

let developers = [
    {
        "id": "a57537a8-6290-4b8b-b0cb-e7de6b000b77",
        "firstName": "Monirul",
        "lastName": "Molla",
        "favoriteLanguage": "Java",
        "yearStarted": 2008,
        "imagePath": null
    },
    {
        "id": "338f0585-6737-48a0-b4be-d88fc011b72d",
        "firstName": "Bill",
        "lastName": "Gates",
        "favoriteLanguage": "BASIC",
        "yearStarted": 1978,
        "imagePath": null
    }
];

//To fetch all bios
app.get("/users", (req, res, next) => {
    res.json(developers);
});

//To save a bio
app.post("/addBio", (req, res, next) => {
    if(!req.body && !req.body.firstName) {
        return res.send({"status": "error", "message": "missing username"});
    } else {
        let params = req.body
        addBio(params);
        console.log(JSON.stringify(params, Object.keys(params).sort()));
        return res.send(developers);
    }
});

//To fetch a bio with respect to id
app.get('/bio/:id', (req, res) =>{
    if(!req.params.id) {
        return res.send({"status": "error", "message": "missing id"});
    } else {
        var devId = req.params.id;
        let myBio = getBioById(devId);
        return res.send(myBio); 
    }
});

//To update a bio with respect to id

app.put("/updateBio", (req, res, next) => {
    if(!req.body && !req.body.firstName) {
        return res.send({"status": "error", "message": "missing username"});
    } else {
        let params = req.body
        updateBio(params);
        console.log(JSON.stringify(params, Object.keys(params).sort()));
        return res.send(developers);
    }
});

//To delete a bio with respect to id
app.delete('/deleteBio/:id', (req, res) =>{
    if(!req.params.id) {
        return res.send({"status": "error", "message": "missing id"});
    } else {
        var devId = req.params.id;
        deleteBio(devId);
        return res.send(developers); 
    }
});


function addBio(params) {
    var newBio = {
        "id": uuidv4(),
        "firstName": params.firstName,
        "lastName": params.lastName,
        "favoriteLanguage": params.favoriteLanguage,
        "yearStarted": params.yearStarted,
        "imagePath": null
    }
    developers.push(newBio);
}

function getBioById(devId){
    let bio = developers.filter(dev => dev.id == devId);
    return bio;
}

function deleteBio(devId){
    var index = developers.findIndex(function(o){
        return o.id === devId;
    });
    if (index !== -1) 
        developers.splice(index, 1);
}

function updateBio(dev){
    developers[developers.findIndex(el => el.id === dev.id)] = dev;
}

function uuidv4() {
    return uuid.v4();
}

app.listen(3000, () => {
    console.log("Server running on port 3000");
});