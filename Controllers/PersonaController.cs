using PracticaFinalPamelaJinez.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace PracticaFinalPamelaJinez.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController : ControllerBase
    {
        private readonly CrudtareasContext _dbcontext;

        public PersonaController(CrudtareasContext context)
        {
            _dbcontext = context;
        }
        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<Persona> lista = await _dbcontext.Personas.OrderByDescending(c => c.IdPersona).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, lista);
        }
        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Persona request)
        {
            await _dbcontext.Personas.AddAsync(request);
            await _dbcontext.SaveChangesAsync();


            return StatusCode(StatusCodes.Status200OK, "ok");

        }
        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Persona request)
        {
            _dbcontext.Personas.Update(request);
            await _dbcontext.SaveChangesAsync();


            return StatusCode(StatusCodes.Status200OK, "ok");

        }
        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Persona persona = _dbcontext.Personas.Find(id);

            _dbcontext.Personas.Remove(persona);
            await _dbcontext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "ok");
        }

    }
}
