using apiDespesasPessoais.Model;
using apiDespesasPessoais.Model.Context;
using System.Linq;

namespace apiDespesasPessoais.Repositorio.Implementations
{
    public class ControleAcessoRepositorioImpl : IControleAcessoRepositorio
    {
        private readonly SqlServerContext _context;

        public ControleAcessoRepositorioImpl(SqlServerContext context)
        {
            _context = context;
        }
        public ControleAcesso FindByEmail(ControleAcesso controleAcesso)
        {
            return _context.ControleAcesso.SingleOrDefault(prop => prop.Login.Equals(controleAcesso.Login));
        }

        public Usuario GetUsuarioByEmail(string login)
        {
            return _context.Usuario.SingleOrDefault(prop => prop.Email.Equals(login));
        }
    }
}
