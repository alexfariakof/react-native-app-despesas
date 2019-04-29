using apiDespesasPessoais.Model;
using apiDespesasPessoais.Model.VO;

namespace apiDespesasPessoais.Business
{
    public interface IControleAcessoBusiness
    {
        object FindByLogin(ControleAcesso controleAcesso);
        bool Create(ControleAcessoVO controleAcessoVO);
        bool RecoveryPassword(string email);
    }
}
