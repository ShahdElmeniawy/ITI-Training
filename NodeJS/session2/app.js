import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

let comments = [
    {
        id: 1,
        author: "Manar",
        body: "first comment"
    }
]


app.get("/home", (req, res) => {
    const filename = fileURLToPath(import.meta.url);
    const myFolder = path.dirname(filename);
    res.sendFile(path.join(myFolder, "home.html"));
})

app.get("/comments", (req, res) => {
    res.json(comments);
})

app.get("/comments/:id", (req, res) => {
    const commentId = req.params.id;
    res.json(comments.filter(comment => comment.id == commentId));
})


app.post("/comments", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: "No data provided" });
    }

    req.body.id = (comments.length ? Number(comments.at(-1).id) + 1 : 1);
    comments.push(req.body);
    res.status(201).json({
        message: "Comment added successfully",
        data: comments
    });
});

// app.post("/comments", (req, res) => {
//     let newid = (comments.length ? Number(comments.at(-1).id + 1) : 1);
//     // req.body.id = newid;
//     comments.push({
//         id : newid,
//         author : req.body.author,
//         body: req.body.body
//     });
//     res.status(201).json({message: "comment added", data: comments});
// })

app.put("/comments/:id", (req, res) => {
    console.log(req.body);
    const commentId = req.params.id;
    const foundComment = comments.find(comment => comment.id == commentId)
    if (foundComment) {
        foundComment.author = req.body.author;
        foundComment.body = req.body.body;
        res.status(200).json({ message: "Comment Updated", data: foundComment })
    } else {
        res.status(404).json({ message: "Comment not found" });
    }
})

app.delete("/comments/:id", (req, res) => {
    const commentId = req.params.id;
    comments = comments.filter(comment => comment.id != commentId);
    res.json(comments);
})

app.listen(3000, (error) => {
    if (error) return error;
    console.log("server is run on port 3000");
});