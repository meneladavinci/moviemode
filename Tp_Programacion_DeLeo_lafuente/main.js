$(
    function(){
        let guardadas = localStorage.getItem("muestra");
        if(guardadas !=null){
            $("section").html(guardadas);
        }
    }
)

$("#nueva").on("click", function(){
    $(".ingreso").css("display", "block");
    $(".info").css("display", "none");
    $(".muestra").css("display", "none");

})

$("#cerrar").on("click", function(){
    $(".ingreso").css("display", "none");    
    $(".muestra").css("display", "block");
    $(".info").css("display", "none");

})

$("#info").on("click", function(){
    $(".ingreso").css("display", "none");
    $(".muestra").css("display", "none");
    $(".info").css("display", "flex");

    

})


$("form").on("submit", function(){
    let pelicula = $("#pelicula").val();
    let categoria = $("#categoria").val();
    let plataforma = $("#plataforma").val();

    let div = $("<div></div>");
    div.addClass("contenedor").html(`
    <div class="tarjeta">
         <h3>${pelicula}</h3>
         <p class="categoria">${categoria}</p>
         <p class="plataforma">${plataforma}</p>
    </div>`)

    
    $("section").prepend(div);
    $(".ingreso").css("display", "none");
    $(".muestra").css("display", "block");    
    
    guardarPeliculas();

    return false;

})

function guardarPeliculas(){
    let listado = $("section").html();
    localStorage.setItem("muestra", listado);
}





