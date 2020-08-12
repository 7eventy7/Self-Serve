const fs = require("fs");
const Dropbox = require("dropbox").Dropbox;
require("isomorphic-fetch");
require("dotenv").config();
const dbx = new Dropbox ({ fetch: fetch, accessToken: process.env.DBXACCESSTOKEN });

module.exports.addModule = function(packPath) {
    dbx({
        resource: "../storage/modules/honeyJar/textures/item/honey_bottle",
        parameters: {
            path: (packPath+"/assets/minecraft/textures/item/honey_bottle.png")
        },
        readStream: fs.createReadStream("../storage/modules/honeyJar/textures/item/honey_bottle")
    }, (err, result, response) => {
        //upload completed
    });
}