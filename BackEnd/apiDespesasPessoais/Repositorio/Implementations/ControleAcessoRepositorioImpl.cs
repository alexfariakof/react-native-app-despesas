using apiDespesasPessoais.Model;
using apiDespesasPessoais.Model.Context;
using apiDespesasPessoais.Model.VO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace apiDespesasPessoais.Repositorio.Implementations
{
    public class ControleAcessoRepositorioImpl : IControleAcessoRepositorio
    {
        private readonly SqlServerContext _context;

        public ControleAcessoRepositorioImpl(SqlServerContext context)
        {
            _context = context;
        }

        public bool Create(ControleAcessoVO controleAcessoVO)
        {
           DbSet<Usuario> dsUsuario = null;
          
            using (_context)
            {
                using (var dbContextTransaction = _context.Database.BeginTransaction())
                {
                    try
                    {
                        dsUsuario = _context.Set<Usuario>();
                        Usuario usuario = new Usuario
                        {
                            Nome = controleAcessoVO.Nome,
                            sobreNome = controleAcessoVO.SobreNome,
                            Email = controleAcessoVO.Email,
                            telefone = controleAcessoVO.Telefone
                        };
                        dsUsuario.Add(usuario);
                       
                        _context.SaveChanges();

                        string sql = "INSERT INTO[dbo].[ControleAcesso] ([login], [senha], [idUsuario]) VALUES (@login, @senha, @idUsuario)";
                        _context.Database.ExecuteSqlCommand(sql, new SqlParameter("@login", usuario.Email), new SqlParameter("@senha", controleAcessoVO.Senha), new SqlParameter("@idUsuario", usuario.Id.Value));

                        dbContextTransaction.Commit();
                        return true;
                    }
                    catch (Exception)
                    {
                        dbContextTransaction.Rollback();
                    }
                }

            }
            return false;
        }

        public ControleAcesso FindByEmail(ControleAcesso controleAcesso)
        {
            return _context.ControleAcesso.SingleOrDefault(prop => prop.Login.Equals(controleAcesso.Login));
        }

        public Usuario GetUsuarioByEmail(string login)
        {
            return _context.Usuario.SingleOrDefault(prop => prop.Email.Equals(login));
        }
    }
}
