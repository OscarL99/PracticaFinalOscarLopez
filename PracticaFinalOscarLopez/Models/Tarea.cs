using System;
using System.Collections.Generic;

namespace PracticaFinalOscarLopez.Models;

public partial class Tarea
{
    public int IdAlumno { get; set; }

    public string? Nombre { get; set; }

    public string? Materia { get; set; }

    public string? Asignacion { get; set; }
}
