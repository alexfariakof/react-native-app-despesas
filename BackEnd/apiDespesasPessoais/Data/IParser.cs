using System.Collections.Generic;

namespace apiDespesasPessoais.Data
{
    public interface IParser<O, D>
    {
        D Parse(O origin);
        List<D> ParseList(List<O> origin);
    }
}