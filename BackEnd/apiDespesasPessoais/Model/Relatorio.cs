using apiDespesasPessoais.Model.Base;
using System;

namespace apiDespesasPessoais.Model
{
    public class Relatotio : BaseEntity
    {
        public string mes { get; set; }
        public int? despesaMes { get; set; }
        public Decimal? despesaValor { get; set; }
        public int? receitaMes { get; set; }
        public Decimal? receitaValor { get; set; }
    }
}
