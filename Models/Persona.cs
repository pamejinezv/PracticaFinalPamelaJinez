using System;
using System.Collections.Generic;

namespace PracticaFinalPamelaJinez.Models;

public partial class Persona
{
    public int IdPersona { get; set; }

    public string? Nombre { get; set; }

    public string? Descripcion { get; set; }

    public string? IsCompleted { get; set; }
}
