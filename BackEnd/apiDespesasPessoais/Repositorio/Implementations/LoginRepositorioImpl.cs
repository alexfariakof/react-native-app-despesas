using apiDespesasPessoais.Model;
using apiDespesasPessoais.Model.Context;
using System.Linq;

namespace apiDespesasPessoais.Repositorio.Implementations
{
    public class LoginRepositorioImpl : ILoginRepositorio
    {
        private readonly SqlServerContext _context;

        public LoginRepositorioImpl(SqlServerContext context)
        {
            _context = context;
        }

        public Login FindById(int id)
        {
            return _context.Login.SingleOrDefault(prop => prop.Id.Equals(id));
        }

        public Login FindByLogin(string email)
        {
            return _context.Login.SingleOrDefault(prop => prop.Email.Equals(email));
        }
    }
}
