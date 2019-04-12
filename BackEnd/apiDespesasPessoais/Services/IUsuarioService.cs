using apiDespesasPessoais.Model;
using System.Collections.Generic;

namespace apiDespesasPessoais.Services
{
    public interface IUsuarioService
    {
        Usuario Create(Usuario usuario);
        Usuario FindById(long idUsuario);
        List<Usuario> FindAll();
        Usuario Update(Usuario usuario);
        void Delete(long id);
    }
}
