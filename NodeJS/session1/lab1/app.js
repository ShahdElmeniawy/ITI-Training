const http = require("http");
const fs = require("fs");
let data = fs.readFileSync("./Nodejs/session1/lab1/db.json", "utf-8");
let db = JSON.parse(data);

// console.log(JSON.parse(data).Posts);
const server = http.createServer(function (req, res) {

    if (!req.url.startsWith("/post")) {
        res.statusCode = 404;
        return res.end("Not Found");
    }


    if (req.method == "GET" && req.url == "/post") {
        res.setHeader("content-type", "application/json");
        res.end(data);
    } else if (req.method == "POST") {
        req.on("data", function (chunk) {
            const addPost = JSON.parse(chunk);
            addPost.id = Number(db.Posts.at(-1).id) + 1;
            if (addPost.blog.trim() === "") {
                res.statusCode = 400;
                return res.end("Blog Is Empty");
            } else if (addPost.title.trim() === "") {
                res.statusCode = 400;
                return res.end("Title Is Empty");
            }
            else {
                db.Posts.push(addPost);
                fs.writeFileSync("./Nodejs/session1/lab1/db.json", JSON.stringify(db, null, 2));
                res.setHeader("content-type", "application/json");
                res.statusCode = 201;
                res.end(JSON.stringify(db));
            }
        });
    } else if (req.method == "DELETE") {
        req.on("data", function (chunk) {
            const deletedBlogId = JSON.parse(chunk);
            db = db.Posts.filter(blog => blog.id != deletedBlogId.id);
            fs.writeFileSync("./Nodejs/session1/lab1/db.json", JSON.stringify(db, null, 2));
            res.end("User Deleted")
        })
    } else if (req.method == "PUT") {
        req.on("data", function (chunk) {
            const EditPost = JSON.parse(chunk);
            const foundPost = db.Posts.find(post => post.id == EditPost.id);
            if (EditPost.blog.trim() === "") {
                res.statusCode = 400;
                return res.end("Blog Is Empty");
            } else if (EditPost.title.trim() === "") {
                res.statusCode = 400;
                return res.end("Title Is Empty");
            } else if (!foundPost) {
                res.statusCode = 404;
                res.end("Post Not Found")
            } else {
                foundPost.title = EditPost.title;
                foundPost.blog = EditPost.blog;
                fs.writeFileSync("./Nodejs/session1/lab1/db.json", JSON.stringify(db, null, 2));
                res.setHeader("content-type", "application/json");
                res.statusCode = 200;
                res.end("Post Updated");
            }
        })
    } else if (req.method == "GET") {
        res.setHeader("content-type", "application/json");
        let id = req.url.split("?");
        res.end(JSON.stringify(db.Posts.filter(post => post.id == id[1])));
    }
})

server.listen(3000, function (error) {
    if (error) return console.log(err);
    console.log("server is running on port 3000");
});