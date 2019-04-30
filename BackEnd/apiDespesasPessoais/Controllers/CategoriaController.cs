using apiDespesasPessoais.Business.Generic;
using apiDespesasPessoais.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace apiDespesasPessoais.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriaController : Controller
    {
        private IBusiness<Categoria> _categoriaBusiness;

        public CategoriaController(IBusiness<Categoria> categoriaBusiness)
        {
            _categoriaBusiness = categoriaBusiness;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_categoriaBusiness.FindAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Categoria _categoria = _categoriaBusiness.FindById(id);

            if (_categoria == null)
                return NotFound();

            return Ok(_categoria);
        }

        [HttpGet("byTipoCategoria/{idTipoCategoria}")]
        public IActionResult Get(byte idTipoCategoria)
        {
            var _categoria = _categoriaBusiness.FindAll().FindAll(prop => prop.IdTipoCategoria.Equals(idTipoCategoria));

            if (_categoria == null)
                return NotFound();

            return Ok(_categoria);
        }

        [HttpPost]
        //[Authorize("Bearer")]
        public IActionResult Post([FromBody] Categoria categoria)
        {
            if (categoria == null)
                return BadRequest();
            return new ObjectResult(_categoriaBusiness.Create(categoria));
        }

        [HttpPut]
        //[Authorize("Bearer")]
        public IActionResult Put([FromBody] Categoria categoria)
        {
            if (categoria == null)
                return BadRequest();

            Categoria updateCategoria = _categoriaBusiness.Update(categoria);
            if (updateCategoria == null)
                return NoContent();

            return new ObjectResult(updateCategoria);
        }

        [HttpDelete("{id}")]
        //[Authorize("Bearer")]
        public IActionResult Delete(int id)
        {
            _categoriaBusiness.Delete(id);
            return NoContent();
        }
    }
}
