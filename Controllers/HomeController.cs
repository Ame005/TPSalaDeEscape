using Microsoft.AspNetCore.Mvc;

namespace TPSalaDeEscape.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
    public IActionResult Tutorial(){
        return View();
    }

    public IActionResult Comenzar(string mensaje){
        if(mensaje!=""){
            ViewBag.Error=mensaje;
        }
        return View("Habitacion"+Escape.GetEstadoJuego());
    }

    public IActionResult Habitacion(int sala, string clave){
        string mensaje= "";
        if(!Escape.ResolverSala(sala, clave)){
            mensaje = "Vuelve a intentar";
        }
        if(Escape.GetEstadoJuego()>4){
            ViewBag.CantIntentosUsados=Escape.cantIntentosUsados;
            
            return View("Victoria");
        }   
        return RedirectToAction("Comenzar", new { mensaje = mensaje });
    }
}
