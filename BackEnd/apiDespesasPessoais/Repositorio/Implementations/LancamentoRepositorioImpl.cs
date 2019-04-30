using apiDespesasPessoais.Model;
using apiDespesasPessoais.Model.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace apiDespesasPessoais.Repositorio.Implementations
{
    public class LancamentoRepositorioImpl : ILancamentoRepositorio
    {
        private readonly SqlServerContext _context;

        public LancamentoRepositorioImpl(SqlServerContext context)
        {
            _context = context;
        }

        public List<Lancamento> FindByMesAno(DateTime data, int idUsuario)
        {
            string sql = "SELECT  Checksum(NewId()) % 100 as id, idUsuario,data,idCategoria,descricao,valor, id as idDespesa, 0 as idReceita FROM Despesa where idUsuario = @idUsuario" +
                         " union " +
                         "SELECT  Checksum(NewId()) % 100 as id, idUsuario,data,idCategoria,descricao,valor, 0 as idDespesa, id as idReceita FROM Receita where idUsuario = @idUsuario";

            using (_context)
            {
                try
                {
                    var list = _context.Lancamento.FromSql(sql, new SqlParameter("@idUsuario", idUsuario)).ToList();
                    return list;
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
        }

        public decimal GetSaldo(int idUsuario)
        {
            using (var command = _context.Database.GetDbConnection().CreateCommand())
            {
                decimal value = 0;
                try
                {

                    command.CommandText = @"Select (SELECT sum(valor) FROM Receita Where idUsuario = @idUsuario) - (SELECT sum(valor) FROM Despesa Where idUsuario = @idUsuario)"; ;
                    command.CommandType = CommandType.Text;
                    var parameter = new SqlParameter("@idUsuario", idUsuario);
                    command.Parameters.Add(parameter);
                    _context.Database.OpenConnection();
                    using (var result = command.ExecuteReader())
                    {
                        if (result.Read())
                        {
                            value  = result.GetDecimal(0);
                        }
                    }
                }
                catch 
                {
                    return 0;
                }
                return value;
            }            
        }
    }
}
