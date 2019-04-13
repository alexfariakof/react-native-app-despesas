using apiDespesasPessoais.Business;
using apiDespesasPessoais.Model;
using Microsoft.AspNetCore.Mvc;

namespace apiDespesasPessoais.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriaController : Controller
    {
        private ICategoriaBusiness _categoriaBusiness;

        public CategoriaController(ICategoriaBusiness categoriaBusiness)
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
            var _categoria = _categoriaBusiness.FindById(id);

            if (_categoria == null)
                return NotFound();

            return Ok(_categoria);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Categoria categoria)
        {
            if (categoria == null)
                return BadRequest();
            return new ObjectResult(_categoriaBusiness.Create(categoria));
        }

        [HttpPut]
        public IActionResult Put([FromBody] Categoria categoria)
        {
            if (categoria == null)
                return BadRequest();

            var updateCategoria = _categoriaBusiness.Update(categoria);
            if (updateCategoria == null)
                return NoContent();

            return new ObjectResult(updateCategoria);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _categoriaBusiness.Delete(id);
            return NoContent();
        }
    }
}
