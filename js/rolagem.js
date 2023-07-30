var header = document.querySelector("header");

window.onscroll = adicionarSombra;

function adicionarSombra()
{
    if(document.documentElement.scrollTop > 0)
    {
        header.classList.add("sombra");
    }
    else
    {
        header.classList.remove("sombra");
        
    }    
}