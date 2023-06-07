const mongoose = require("mongoose");

async function main(){
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect("mongodb+srv://carlosjardel:vQ1JVMJOJVKrfn5M@infosistemasveiculos.icdpeoq.mongodb.net/?retryWrites=true&w=majority")
        console.log("conectado ao banco")
    } catch (error) {
        console.log("erro no banco")
        console.log(error)
    }
}
//vQ1JVMJOJVKrfn5M

module.exports = main;