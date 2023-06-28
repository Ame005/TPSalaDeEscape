static class Escape {
    static string[] incognitasSalas;
    static int estadoJuego = 0;
    static public int cantIntentosUsados=0;

    private static void InicializarJuego(){
        incognitasSalas = new string[3];
        incognitasSalas[0] = "bxt";
        incognitasSalas[1] = "encontrado";
        incognitasSalas[2] = "eenenoosones";
    }
    public static int GetEstadoJuego(){
        return estadoJuego;
    }

    public static bool ResolverSala(int Sala, string Incognita){

        if(incognitasSalas == null){
            InicializarJuego();
        }
        if (estadoJuego==Sala){
            if(Incognita.ToLower() == incognitasSalas[Sala-1]){
                estadoJuego++;
                return true;
            }
        }
        return false;
    }

    public static void Inicializar(){
        estadoJuego = 1;
    }
}