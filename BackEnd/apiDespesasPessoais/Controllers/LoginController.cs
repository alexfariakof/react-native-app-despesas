using apiDespesasPessoais.Business;
using apiDespesasPessoais.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace apiDespesasPessoais.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        private IControleAcessoBusiness _loginBusiness;

        public LoginController(IControleAcessoBusiness loginBusiness)
        {
            _loginBusiness = loginBusiness;
        }
        
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Post([FromBody] ControleAcesso controleAcesso)
        {
            if (controleAcesso == null)
                return BadRequest();

            return new ObjectResult(_loginBusiness.FindByLogin(controleAcesso));
        }

    }
}
