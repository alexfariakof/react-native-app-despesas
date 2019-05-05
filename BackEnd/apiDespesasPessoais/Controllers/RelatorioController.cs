using apiDespesasPessoais.Business;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace apiDespesasPessoais.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RelatorioController : Controller
    {
        private IRelatorioBusiness _relatorioBusiness;
        public RelatorioController(IRelatorioBusiness relatorioBusiness)
        {
            _relatorioBusiness = relatorioBusiness;
        }

        [HttpGet("{idUsuario}/{ano}")]
        //[Authorize("Bearer")]
        public IActionResult Get(int idUsuario, int ano)
        {
            
            var saldoDespesa = _relatorioBusiness.GetTotalDespesaUsuarioByAno(idUsuario, ano);
            var saldoReceita = _relatorioBusiness.GetTotalReceitaUsaurioByAno(idUsuario, ano);
            var list = _relatorioBusiness.GetRelatorioUsuarioByAno(idUsuario, ano);

            if (list == null || list.Count == 0)
                return NotFound();

            return new ObjectResult(new { saldoDespesa = saldoDespesa, saldoReceita = saldoReceita , relatorio = list });
        }
    }
}