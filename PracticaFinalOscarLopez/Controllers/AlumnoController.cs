﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PracticaFinalOscarLopez.Models;

namespace PracticaFinalOscarLopez.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlumnoController : ControllerBase
    {
        private readonly ProyectoFinalContext _dbcontext;

        public AlumnoController(ProyectoFinalContext context)
        {
            _dbcontext = context;
        }
        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<Tarea> lista = await _dbcontext.Tareas.OrderByDescending(c => c.IdAlumno).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, lista);
        }
        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Tarea request)
        {

            await _dbcontext.Tareas.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }
        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Tarea request)
        {

            _dbcontext.Tareas.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }
        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {

            Tarea alumno = _dbcontext.Tareas.Find(id);
            _dbcontext.Tareas.Remove(alumno);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }
    }
}
