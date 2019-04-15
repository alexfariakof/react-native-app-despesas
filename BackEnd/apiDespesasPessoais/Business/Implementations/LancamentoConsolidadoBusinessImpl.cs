using apiDespesasPessoais.Business.Generic;
using apiDespesasPessoais.Model;
using apiDespesasPessoais.Repositorio.Generic;
using System.Collections.Generic;

namespace apiLancamentoConsolidadosPessoais.Business.Implementations
{
    public class LancamentoConsolidadoBusinessImpl : IBusiness<LancamentoConsolidado>
    {
        private readonly IRepositorio<LancamentoConsolidado> _repositorio;

        public LancamentoConsolidadoBusinessImpl(IRepositorio<LancamentoConsolidado> repositorio)
        {
            _repositorio = repositorio;
        }
        public LancamentoConsolidado Create(LancamentoConsolidado obj)
        {
            return _repositorio.Create(obj);
        }

        public List<LancamentoConsolidado> FindAll()
        {
            return _repositorio.FindAll();
        }      

        public LancamentoConsolidado FindById(int id)
        {
            return _repositorio.FindById(id);
        }

        public LancamentoConsolidado Update(LancamentoConsolidado obj)
        {           

            return _repositorio.Update(obj);
        }

        public void Delete(int id)
        {
            _repositorio.Delete(id);
        }

    }
}
