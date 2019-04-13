using apiDespesasPessoais.Model;
using apiDespesasPessoais.Repositorio;
using apiDespesasPessoais.Repositorio.Generic;
using System.Collections.Generic;

namespace apiDespesasPessoais.Business.Implementations
{
    public class UsuarioBusinessImpl : IUsuarioBusiness
    {
        private IRepositorio<Usuario> _repositorio;

        public UsuarioBusinessImpl(IRepositorio<Usuario> repositorio)
        {
            _repositorio = repositorio;
        }
        public Usuario Create(Usuario usuario)
        {
            return _repositorio.Create(usuario);
        }

        public List<Usuario> FindAll()
        {
            return _repositorio.FindAll();
        }      

        public Usuario FindById(int idUsuario)
        {
            return _repositorio.FindById(idUsuario);
        }

        public Usuario Update(Usuario usuario)
        {           

            return _repositorio.Update(usuario);
        }

        public void Delete(int idUsuario)
        {
            _repositorio.Delete(idUsuario);
        }

    }
}
