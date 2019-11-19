import mongoose from'mongoose';
const URI = 'mongodb+srv://omnicanaljamar:Jamar2021@cluster0-ufoov.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
});
const connections =  mongoose.connection;
connections.once('open', () => {
    console.log('BD is connected')
})
mongoose.set('useFindAndModify', false);