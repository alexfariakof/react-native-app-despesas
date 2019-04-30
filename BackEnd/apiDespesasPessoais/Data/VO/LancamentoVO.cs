using System;

namespace apiDespesasPessoais.Data.VO
{
    public class LancamentoVO
    {
        public int Id { get; set; }
        public int IdUsuario { get; set; }
        public int IdDespesa { get; set; }
        public int IdReceita { get; set; }
        public String Valor { get; set; }
        public String Data { get; set; }
    }
}
