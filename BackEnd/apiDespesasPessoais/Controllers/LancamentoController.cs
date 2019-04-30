using apiDespesasPessoais.Business;
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
        public IActionResult Get(DateTime mesAno, int idUsuario)
        {
            var list = _lancamentoBusiness.FindByMesAno(mesAno, idUsuario);
            return new ObjectResult(list);
        }

        [HttpGet("Saldo/{idUsuario}")]
        public IActionResult Get(int idUsuario)
        {
            var saldo = _lancamentoBusiness.GetSaldo(idUsuario);
            return new ObjectResult(saldo);
        }

    }
}