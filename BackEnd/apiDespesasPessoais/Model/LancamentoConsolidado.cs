using apiDespesasPessoais.Model.Base;
using System;

namespace apiDespesasPessoais.Model
{
    public class LancamentoConsolidado : BaseEntity
    {
        public int IdUsuario { get; set; }
        public int IdDespesa { get; set; }
        public int IdReceita { get; set; }
        public int Mes { get; set; }
        public int Ano { get; set; }
        public Decimal Valor { get; set; }
        public DateTime DataLancamento { get; set; }

    }
}
