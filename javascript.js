

function verificar()
{

    const nome = document.forms["form"]["nome"].value;
    const user = document.forms["form"]["user"].value;
    const email = document.forms["form"]["email"].value;
    const senha = document.forms["form"]["senha"].value;

    if (nome == "") 
        {
            alert("Insira um nome para finalizar o cadastro!");
            return false;
        }

     if (user == "") 
        {
            alert("Insira um nome de usuário para finalizar o cadastro!");
            return false;
        }


    if (email == "") 
        {
            alert("Insira um e-mail para finalizar o cadastro!");
            return false;
        }


    if (senha == "") 
        {
            alert("Crie uma senha para finalizar o cadastro!");
            return false;
        }

    if (nome != "" && user != "" && email != "" && senha != "") 
        {
            
            alert("Seus dads foram enviados com sucesso!");
            return true;
        }
    if (verificar == true) 
        {
            
        }



    
}   




    











