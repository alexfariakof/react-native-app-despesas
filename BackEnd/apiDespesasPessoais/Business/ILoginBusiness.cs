using apiDespesasPessoais.Model;

namespace apiDespesasPessoais.Business
{
    public interface ILoginBusiness
    {
        object FindByLogin(Login login);
    }
}
