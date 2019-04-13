using System;
using System.Collections.Generic;
using apiDespesasPessoais.Model;
using apiDespesasPessoais.Services;
using Microsoft.AspNetCore.Mvc;

namespace apiDespesasPessoais.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private IUsuarioService _usuarioService;

        public UsuarioController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_usuarioService.FindAll());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var _usuario = _usuarioService.FindById(id);

            if (_usuario == null)
                return NotFound();

            return Ok(_usuario);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] Usuario usuario)
        {
            if (usuario == null)
                return BadRequest();
            return new ObjectResult(_usuarioService.Create(usuario));
        }

        // PUT api/values/5
        [HttpPut]
        public IActionResult Put([FromBody] Usuario usuario)
        {
            if (usuario == null)
                return BadRequest();
            return new ObjectResult(_usuarioService.Update(usuario));

        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _usuarioService.Delete(id);
            return NoContent(); // Erro HTTP 204
        }
    }
}
