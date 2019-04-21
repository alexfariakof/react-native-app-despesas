using apiDespesasPessoais.Business;
using apiDespesasPessoais.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace apiDespesasPessoais.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignInController : Controller
    {
        private IControleAcessoBusiness _signInBusiness;

        public SignInController(IControleAcessoBusiness signInBusiness)
        {
            _signInBusiness = signInBusiness;
        }
        
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Post([FromBody] ControleAcesso controleAcesso)
        {
            if (controleAcesso == null)
                return BadRequest();

            return new ObjectResult(_signInBusiness.FindByLogin(controleAcesso));
        }
    }
}
