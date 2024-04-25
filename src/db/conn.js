const mongoose = require('mongoose');
mongoose
  .connect("mongodb+srv://akshat2912003:root@cluster0.uh8d0uz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log(`connection successful`);
}).catch((err) =>{
    console.log(`no connection: ${err.message}`);
})
