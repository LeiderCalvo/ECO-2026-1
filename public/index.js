console.log("funciona");

fetch("/users", {
    method: "GET"
})
.then(x => x.json())
.then(console.log)
.catch(console.log)