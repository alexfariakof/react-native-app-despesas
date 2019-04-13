using apiDespesasPessoais.Model;

namespace apiDespesasPessoais.Repositorio
{
    public interface ILoginRepositorio
    { 
        Login FindByLogin(string email);
    }
}
