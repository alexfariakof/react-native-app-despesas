using apiDespesasPessoais.Model;
using System;
using System.Collections.Generic;

namespace apiDespesasPessoais.Business
{
    public interface ILancamentoBusiness
    {
        List<Lancamento> FindByMesAno(DateTime data, int idUsuario);
        decimal GetSaldo(int idUsuario);
    }
}
