using apiDespesasPessoais.Model;
using System.Collections.Generic;

namespace apiDespesasPessoais.Business
{
    public interface IUsuarioBusiness
    {
        Usuario Create(Usuario obj);
        Usuario FindById(int id);
        List<Usuario> FindAll();
        Usuario Update(Usuario obj);
        void Delete(int id);
    }
}
