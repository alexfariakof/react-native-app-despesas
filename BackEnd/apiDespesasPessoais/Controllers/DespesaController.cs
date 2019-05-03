using apiDespesasPessoais.Business.Generic;
using apiDespesasPessoais.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace apiDespesasPessoais.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DespesaController : Controller
    {
        private IBusiness<Despesa> _despesaBusiness;

        public DespesaController(IBusiness<Despesa> despesaBusiness)
        {
            _despesaBusiness = despesaBusiness;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_despesaBusiness.FindAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Despesa _despesa = _despesaBusiness.FindById(id);

            if (_despesa == null)
                return NotFound();

            return Ok(_despesa);
        }

        [HttpPost]
        //[Authorize("Bearer")]
        public IActionResult Post([FromBody] Despesa despesa)
        {
            if (despesa == null)
                return BadRequest();
            try
            {
                return new ObjectResult(_despesaBusiness.Create(despesa));
            }
            catch
            {
                return BadRequest("{ 'message' : 'Não foi possível realizar o cadastro'}");
            }
        }

        [HttpPut]
        //[Authorize("Bearer")]
        public IActionResult Put([FromBody] Despesa despesa)
        {
            if (despesa == null)
                return BadRequest();

            Despesa updateDespesa = _despesaBusiness.Update(despesa);
            if (updateDespesa == null)
                return NoContent();

            return new ObjectResult(updateDespesa);
        }

        [HttpDelete("{id}")]
        //[Authorize("Bearer")]
        public IActionResult Delete(int id)
        {
            _despesaBusiness.Delete(id);
            return NoContent();
        }
    }
}
