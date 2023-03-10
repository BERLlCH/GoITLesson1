// const fs = require("fs");
// const fs = require("fs/promises");
// const fs = require("fs").promises;

const fileOparation = async ({action, filepath, data}) => {
    switch (action) {
        case "read":
            const text = await fs.readFile(filepath, "utf-8");
            console.log(text);
            // const result = await fs.readFile(filepath);
            // const text = result.toString();
            // console.log(text);
            break;
        case "append":
            await fs.appendFile(filepath, data);
            break;
        case "write":
            await fs.writeFile(filepath, data);
            break;
        default:
            console.log("Unknown action");
    }
}

const filepath = "./files/file.txt";

// fileOparation({action: "read", filepath})
// fileOparation({action: "add", filepath, data: "\nТак говорил Заратустра"})
// fileOparation({action: "replace", filepath, data: "Так говорил Заратустра"})

// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// fs.readFile("./files/file.txt", (error, data)=> {
//     console.log(error);
//     console.log(data);
// });