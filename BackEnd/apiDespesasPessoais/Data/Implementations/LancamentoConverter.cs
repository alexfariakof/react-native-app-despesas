using apiDespesasPessoais.Data.VO;
using apiDespesasPessoais.Model;
using System.Collections.Generic;
using System.Linq;

namespace apiDespesasPessoais.Data.Implementations
{
    public class LancamentoConverter : IParser<LancamentoVO, Lancamento>, IParser<Lancamento, LancamentoVO>
    {
        public Lancamento Parse(LancamentoVO origin)
        {
            if (origin == null) return new Lancamento();
            return new Lancamento
            {
                Id = origin.Id,
                IdDespesa = origin.IdDespesa,
                IdReceita = origin.IdReceita,
                IdUsuario = origin.IdUsuario,
                Data = origin.Data.ToDateTime(),
                Valor = origin.Valor.ToDecimal()                
            };
        }

        public LancamentoVO Parse(Lancamento origin)
        {
            if (origin == null) return new LancamentoVO();
            return new LancamentoVO
            {
                Id = origin.Id.Value,
                IdDespesa = origin.IdDespesa,
                IdReceita = origin.IdReceita,
                IdUsuario = origin.IdUsuario,
                Data = origin.Data.ToDateBr(),
                Valor = origin.Valor.ToString("N2")
            };
        }

        public List<Lancamento> ParseList(List<LancamentoVO> origin)
        {
            if (origin == null) return new List<Lancamento>();
            return origin.Select(item => Parse(item)).ToList();
        }

        public List<LancamentoVO> ParseList(List<Lancamento> origin)
        {
            if (origin == null) return new List<LancamentoVO>();
            return origin.Select(item => Parse(item)).ToList();
        }
    }
}
