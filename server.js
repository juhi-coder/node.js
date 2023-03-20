const http= require("http");
const server=http.createServer((req,res)=>{
const url=req.url;
if(url === '/')
{
    res.write("hi this is juhi besides here");
    return res.end();
}
else if(url==="/home")
{
    res.write(" Welcome home");
    return res.end();
}
else if(url==="/about")
{
    res.write("Welcome to About Us page");
    return res.end();
}
else if(url==="/node")
{
    res.write("Welcome to my Node Js project");
    return res.end();
}
})
server.listen(8081,()=>{
    console.log('juhi kumari')
})