using apiDespesasPessoais.Model;
using apiDespesasPessoais.Model.Context;
using System;
using System.Collections.Generic;
using System.Linq;

namespace apiDespesasPessoais.Repositorio.Implementations
{
    public class UsuarioRepositorioImpl : IUsuarioRepositorio
    {
        /*
        private SqlServerContext _context;

        public UsuarioRepositorioImpl(SqlServerContext context)
        {
            _context = context;
        }
        public Usuario Create(Usuario usuario)
        {
            try
            {
                _context.Add(usuario);
                _context.SaveChanges();
            }
            catch(Exception ex)
            {
                throw ex;
            }
            return usuario;
        }

        public List<Usuario> FindAll()
        {
            try
            {
                return _context.Usuario.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }  
    

        public Usuario FindById(int idUsuario)
        {
            return _context.Usuario.SingleOrDefault(prop => prop.Id.Equals(idUsuario));
        }

        public Usuario Update(Usuario usuario)
        {
            if (!Exist(usuario.Id))
                return null;

            var result = _context.Usuario.SingleOrDefault(prop => prop.Id.Equals(usuario.Id));            
            try
            {
                _context.Entry(result).CurrentValues.SetValues(usuario);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return usuario;
        }

        public void Delete(int id)
        {
            var result = _context.Usuario.SingleOrDefault(prop => prop.Id.Equals(id));
            try
            {
                if (result != null)
                    _context.Usuario.Remove(result);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private bool Exist(int idUsuario)
        {
            return _context.Usuario.Any(prop => prop.Id.Equals(idUsuario));
        }

    }
    */
        public Usuario Create(Usuario usuario)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public List<Usuario> FindAll()
        {
            throw new NotImplementedException();
        }

        public Usuario FindById(int idUsuario)
        {
            throw new NotImplementedException();
        }

        public Usuario Update(Usuario usuario)
        {
            throw new NotImplementedException();
        }
    }
}
