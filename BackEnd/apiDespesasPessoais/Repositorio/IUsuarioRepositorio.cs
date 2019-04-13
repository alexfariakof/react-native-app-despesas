using apiDespesasPessoais.Model;
using System.Collections.Generic;

namespace apiDespesasPessoais.Repositorio
{
    public interface IUsuarioRepositorio
    {
        Usuario Create(Usuario usuario);
        Usuario FindById(int idUsuario);
        List<Usuario> FindAll();
        Usuario Update(Usuario usuario);
        void Delete(int id);
    }
}
