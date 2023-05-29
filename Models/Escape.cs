static class Escape {
    static string[] incognitasSalas;
    static int estadoJuego;

    private static void InicializarJuego(){
        incognitasSalas = new string[4];
        incognitasSalas[0] = "";
        incognitasSalas[1] = "";
        incognitasSalas[2] = "";
        incognitasSalas[3] = "";

        estadoJuego = 1;
    }
    public static int GetEstadoJuego(){
        return estadoJuego;
    }

    public static bool ResolverSala(int Sala, string Incognita){
        if(incognitasSalas == null){
            InicializarJuego();
        }
        
        if(Incognita == incognitasSalas[Sala-1]){
            estadoJuego++;
            return true;
        }
        return false;
    }
}