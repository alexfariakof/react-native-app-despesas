using apiDespesasPessoais.Model;

namespace apiDespesasPessoais.Business
{
    public interface IControleAcessoBusiness
    {
        object FindByLogin(ControleAcesso controleAcesso);
    }
}
