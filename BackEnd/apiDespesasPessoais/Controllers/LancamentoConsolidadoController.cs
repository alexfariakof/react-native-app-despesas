using apiDespesasPessoais.Business.Generic;
using apiDespesasPessoais.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace apiLancamentoConsolidadosPessoais.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LancamentoConsolidadoController : Controller
    {
        private IBusiness<LancamentoConsolidado> _lancamentoConsolidadoBusiness;

        public LancamentoConsolidadoController(IBusiness<LancamentoConsolidado> lancamentoConsolidadoBusiness)
        {
            _lancamentoConsolidadoBusiness = lancamentoConsolidadoBusiness;
        }

        [HttpGet]
        [Authorize("Bearer")]
        public IActionResult Get()
        {
            var _lancamentoConsolidado = _lancamentoConsolidadoBusiness.FindAll();

            if (_lancamentoConsolidado == null || _lancamentoConsolidado.Count == 0)
                return NotFound();

            return Ok(_lancamentoConsolidado);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var _lancamentoConsolidado = _lancamentoConsolidadoBusiness.FindById(id);

            if (_lancamentoConsolidado == null)
                return NotFound();

            return Ok(_lancamentoConsolidado);
        }

        [HttpPost]
        //[Authorize("Bearer")]
        public IActionResult Post([FromBody] LancamentoConsolidado lancamentoConsolidado)
        {
            if (lancamentoConsolidado == null)
                return BadRequest();
            return new ObjectResult(_lancamentoConsolidadoBusiness.Create(lancamentoConsolidado));
        }

        [HttpPut]
        //[Authorize("Bearer")]
        public IActionResult Put([FromBody] LancamentoConsolidado lancamentoConsolidado)
        {
            if (lancamentoConsolidado == null)
                return BadRequest();

            var updateLancamentoConsolidado = _lancamentoConsolidadoBusiness.Update(lancamentoConsolidado);
            if (updateLancamentoConsolidado == null)
                return NoContent();

            return new ObjectResult(updateLancamentoConsolidado);
        }

        [HttpDelete("{id}")]
        //[Authorize("Bearer")]
        public IActionResult Delete(int id)
        {
            _lancamentoConsolidadoBusiness.Delete(id);
            return NoContent();
        }
    }
}
