static class Escape {
    static string[] incognitasSalas;
    static int estadoJuego = 1;
    static public int cantIntentosUsados=0;

    private static void InicializarJuego(){
        incognitasSalas = new string[4];
        incognitasSalas[0] = "bxt";
        incognitasSalas[1] = "Encontrado";
        incognitasSalas[2] = "eenenoosones";
        incognitasSalas[3] = "ALGO";
    }
    public static int GetEstadoJuego(){
        return estadoJuego;
    }

    public static bool ResolverSala(int Sala, string Incognita){

        if(incognitasSalas == null){
            InicializarJuego();
        }
        if (estadoJuego==Sala){
            if(Incognita == incognitasSalas[Sala-1]){
                estadoJuego++;
                System.Threading.Thread.Sleep(2000);
                return true;
            }
        }
        return false;
    }

    public static void Inicializar(){
        estadoJuego = 1;
    }
}