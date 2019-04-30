using System;
using System.Collections.Generic;
using apiDespesasPessoais.Model;
using apiDespesasPessoais.Repositorio;

namespace apiDespesasPessoais.Business.Implementations
{
    public class LancamentoBusinessImpl : ILancamentoBusiness
    {
        private readonly ILancamentoRepositorio _repositorio;

        public LancamentoBusinessImpl(ILancamentoRepositorio repositorio)
        {
            _repositorio = repositorio;
        }

        public List<Lancamento> FindByMesAno(DateTime data, int idUsuario)
        {
           return  _repositorio.FindByMesAno(data, idUsuario);
        }

        public decimal GetSaldo(int idUsuario)
        {
            return _repositorio.GetSaldo(idUsuario);
        }
    }
}
