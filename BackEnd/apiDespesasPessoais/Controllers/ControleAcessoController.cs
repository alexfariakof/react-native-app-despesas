using apiDespesasPessoais.Business;
using apiDespesasPessoais.Model;
using apiDespesasPessoais.Data.VO;
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

            var result = _controleAcessoBusiness.Create(controleAcessoVO);

            if (result)
                return  Ok(new { message = result });
            else
                return BadRequest(new { message = "Não foi possível realizar o cadastro" });
        }
        
        [AllowAnonymous]
        [HttpPost("SignIn")]
        public IActionResult Post([FromBody] ControleAcesso controleAcesso)
        {
            if (controleAcesso == null)
                return BadRequest();

            return new ObjectResult(_controleAcessoBusiness.FindByLogin(controleAcesso));
        }

        [AllowAnonymous]
        [HttpPost("RecoveryPassword")]
        public IActionResult RecoveryPassword([FromBody] TempObject tempObject)
        {
            if (!string.IsNullOrWhiteSpace(tempObject.email) && !string.IsNullOrEmpty(tempObject.email))
                if (_controleAcessoBusiness.RecoveryPassword(tempObject.email))
                    return Ok(new { message = true });
                else
                    return Ok(new { message = "Email não pode ser enviado, tente novamente mais tarde."});

            return BadRequest(new { message = "Não foi possível enviar o email, tente novamente mis tarde ou entre em contato com nosso suporte." });
        }
        public class TempObject
        {
            public string email { get; set; }
        }
    }
}

