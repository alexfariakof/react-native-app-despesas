using apiDespesasPessoais.Business.Generic;
using apiDespesasPessoais.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace apiReceitasPessoais.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReceitaController : Controller
    {
        private IBusiness<Receita> _receitaBusiness;

        public ReceitaController(IBusiness<Receita> receitaBusiness)
        {
            _receitaBusiness = receitaBusiness;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_receitaBusiness.FindAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Receita _receita = _receitaBusiness.FindById(id);

            if (_receita == null)
                return NotFound();

            return Ok(_receita);
        }

        [HttpPost]
        [Authorize("Bearer")]
        public IActionResult Post([FromBody] Receita receita)
        {
            if (receita == null)
                return BadRequest();
            return new ObjectResult(_receitaBusiness.Create(receita));
        }

        [HttpPut]
        //[Authorize("Bearer")]
        public IActionResult Put([FromBody] Receita receita)
        {
            if (receita == null)
                return BadRequest();

            Receita updateReceita = _receitaBusiness.Update(receita);
            if (updateReceita == null)
                return NoContent();

            return new ObjectResult(updateReceita);
        }

        [HttpDelete("{id}")]
        //[Authorize("Bearer")]
        public IActionResult Delete(int id)
        {
            _receitaBusiness.Delete(id);
            return NoContent();
        }
    }
}
