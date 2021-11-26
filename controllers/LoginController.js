//regras para as rotas e seus requests.

const login = async (req, res) => {
    const {body} = req;
    try{
        if(body.res.user == "isaac"){
            console.log("oukay")
        }
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    login,
}