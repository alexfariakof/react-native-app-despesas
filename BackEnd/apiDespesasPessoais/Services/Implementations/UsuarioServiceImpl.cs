using apiDespesasPessoais.Model;
using apiDespesasPessoais.Services;
using System.Collections.Generic;

namespace apiDespesasPessoais.Services.Implementations
{
    public class UsuarioServiceImpl : IUsuarioService
    {
        public Usuario Create(Usuario usuario)
        {
            throw new System.NotImplementedException();
        }

        public List<Usuario> FindAll()
        {
            List<Usuario> lstUsuario = new List<Usuario>();

            lstUsuario.Add(
                new Usuario
                {
                    idUsuario = 1,
                    email = "alexfariakof@gmail.com",
                    nome = "Alex Ribeiro",
                    senha = "1234"
                });
            lstUsuario.Add(
                new Usuario
                {
                    idUsuario = 2,
                    email = "rosethalita@gmail.com",
                    nome = "Rosilene Thalita ",
                    senha = "4321"
                });
            return lstUsuario;
        }  
    

        public Usuario FindById(long idUsuario)
        {
        Usuario obj = new Usuario
            {
                idUsuario = 1,
                email = "alexfariakof@gmail.com",
                nome = "Alex Ribeiro",
                senha = "1234"
            };

            return obj;
        }

        public Usuario Update(Usuario usuario)
        {
            Usuario obj = new Usuario
            {
                idUsuario = 2,
                email = "rosethalita@gmail.com",
                nome = "Rosilene Thalita ",
                senha = "4321"
            };
        return obj;
        }
        public void Delete(long id)
        {
            throw new System.NotImplementedException();
        }
    }
}
