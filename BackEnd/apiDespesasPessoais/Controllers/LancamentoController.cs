using apiDespesasPessoais.Business;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace apiDespesasPessoais.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LancamentoController : Controller
    {
        private ILancamentoBusiness _lancamentoBusiness;
        public LancamentoController(ILancamentoBusiness lancamentoBusiness)
        {
            _lancamentoBusiness = lancamentoBusiness;
        }

        [HttpGet("{mesAno}/{idUsuario}")]
        [Authorize("Bearer")]
        public IActionResult Get(DateTime mesAno, int idUsuario)
        {
            var list = _lancamentoBusiness.FindByMesAno(mesAno, idUsuario);

            if (list == null || list.Count == 0)
                return NotFound();

            return Ok(list);
        }

        [HttpGet("Saldo/{idUsuario}")]
        [Authorize("Bearer")]
        public IActionResult Get(int idUsuario)
        {
            var saldo = _lancamentoBusiness.GetSaldo(idUsuario);

            return Ok(saldo);
        }
    }
}