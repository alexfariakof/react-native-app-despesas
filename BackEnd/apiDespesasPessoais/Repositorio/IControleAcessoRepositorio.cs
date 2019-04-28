using apiDespesasPessoais.Model;
using apiDespesasPessoais.Model.VO;

namespace apiDespesasPessoais.Repositorio
{
    public interface IControleAcessoRepositorio
    { 
        ControleAcesso FindByEmail(ControleAcesso controleAcesso);
        Usuario GetUsuarioByEmail(string login);
        bool  Create(ControleAcessoVO controleAcessoVO);
    }
}
