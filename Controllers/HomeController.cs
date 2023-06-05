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

    public IActionResult Comenzar(){
        return View("Habitacion"+Escape.GetEstadoJuego());
    }

    public IActionResult Habitacion(int sala, string clave){
        if(!Escape.ResolverSala(sala, clave)){
            ViewBag.Error = "Vuelva a intentar";
        }
        return RedirectToAction("Comenzar");
       
    }
}
