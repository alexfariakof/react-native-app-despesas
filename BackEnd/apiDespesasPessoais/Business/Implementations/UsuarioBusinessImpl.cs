using apiDespesasPessoais.Business.Generic;
using apiDespesasPessoais.Model;
using apiDespesasPessoais.Repositorio.Generic;
using System.Collections.Generic;

namespace apiDespesasPessoais.Business.Implementations
{
    public class UsuarioBusinessImpl : IBusiness<Usuario>
    {
        private IBusiness<Usuario> _business;

        public UsuarioBusinessImpl(IBusiness<Usuario> business)
        {
            _business = business;
        }
        public Usuario Create(Usuario usuario)
        {
            return _business.Create(usuario);
        }

        public List<Usuario> FindAll()
        {
            return _business.FindAll();
        }      

        public Usuario FindById(int idUsuario)
        {
            return _business.FindById(idUsuario);
        }

        public Usuario Update(Usuario usuario)
        {           

            return _business.Update(usuario);
        }

        public void Delete(int idUsuario)
        {
            _business.Delete(idUsuario);
        }

    }
}
