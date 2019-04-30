using apiDespesasPessoais.Data.VO;
using System;
using System.Collections.Generic;

namespace apiDespesasPessoais.Business
{
    public interface ILancamentoBusiness
    {
        List<LancamentoVO> FindByMesAno(DateTime data, int idUsuario);
        decimal GetSaldo(int idUsuario);
    }
}
