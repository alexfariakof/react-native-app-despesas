using apiDespesasPessoais.Model;
using System;
using System.Collections.Generic;

namespace apiDespesasPessoais.Repositorio
{
    public interface ILancamentoRepositorio
    {
        List<Lancamento> FindByMesAno(DateTime data, int idUsuario);
        decimal GetSaldo(int idUsuario);
    }
}
