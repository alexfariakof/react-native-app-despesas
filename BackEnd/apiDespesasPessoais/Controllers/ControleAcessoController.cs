using apiDespesasPessoais.Business;
using apiDespesasPessoais.Model.VO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace apiDespesasPessoais.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ControleAcessoController : Controller
    {
        private IControleAcessoBusiness _controleAcessoBusiness;

        public ControleAcessoController(IControleAcessoBusiness controleAcessoBusiness)
        {
            _controleAcessoBusiness = controleAcessoBusiness;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Post([FromBody] ControleAcessoVO controleAcessoVO)
        {
            if (controleAcessoVO == null)
                return BadRequest();
                       

            if (_controleAcessoBusiness.Create(controleAcessoVO))
                return new ObjectResult(_controleAcessoBusiness.Create(controleAcessoVO));
            else
                return Ok("{ 'message' : 'Não foi possível realizar o cadastro'}");

        }

        [AllowAnonymous]
        [HttpPost("RecoveryPassword")]
        public IActionResult RecoveryPassword([FromBody] string  email )
        {
            if (!string.IsNullOrWhiteSpace(email) && !string.IsNullOrEmpty(email))
                return Ok(_controleAcessoBusiness.RecoveryPassword(email));
            return BadRequest();
        }


    }
}
