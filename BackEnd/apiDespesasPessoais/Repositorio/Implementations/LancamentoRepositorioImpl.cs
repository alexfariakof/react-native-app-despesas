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
            int mes = data.Month;
            int ano = data.Year;

            string sql = "Select ABS(Checksum(NewId()) %10000) as id, lancamentos.* From ( " + 
                         "Select d.idUsuario, data, idCategoria, valor*-1 as valor, d.id as idDespesa, 0 as idReceita, d.descricao, c.descricao as categoria " +
                         "  FROM Despesa d " +
                         " Inner Join Categoria c on d.idCategoria = c.id " +
                         " where d.idUsuario = @idUsuario " +
                         "   and Month(data) = @mes " +
                         "   and  Year(data) = @ano " +
                         " union " +
                         "Select r.idUsuario, data, idCategoria, valor,0 as idDespesa, r.id as idReceita, r.descricao, c.descricao as categoria " +
                         "  FROM Receita r " +
                         " Inner Join Categoria c on r.idCategoria = c.id " +
                         " where r.idUsuario = @idUsuario " +
                         "   and Month(data) = @mes " +
                         "   and  Year(data) = @ano " +
                         ") lancamentos ";

            using (_context)
            {
                try
                {
                    var list = _context.Lancamento.FromSql(sql, new SqlParameter("@idUsuario", idUsuario), new SqlParameter("@mes", data.Month), new SqlParameter("@ano", data.Year)).ToList();
                    return list.OrderBy(item => item.Data).ThenBy(item => item.Categoria).ToList();

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
