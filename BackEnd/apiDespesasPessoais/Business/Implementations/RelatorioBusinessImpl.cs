using System;
using System.Collections.Generic;
using apiDespesasPessoais.Data.Implementations;
using apiDespesasPessoais.Data.VO;
using apiDespesasPessoais.Model;
using apiDespesasPessoais.Repositorio;

namespace apiDespesasPessoais.Business.Implementations
{
    public class RelatorioBusinessImpl : IRelatorioBusiness
    {
        private readonly IRelatorioRepositorio _repositorio;
        public RelatorioBusinessImpl(IRelatorioRepositorio repositorio)
        {
            _repositorio = repositorio;        
        }
        
        public List<Relatotio> GetRelatorioUsuarioByAno(int idUsuario, int ano)
        {
            return _repositorio.GetRelatorioUsuarioByAno(idUsuario, ano);
        }

        public decimal GetTotalDespesaUsuarioByAno(int idUsuario, int ano)
        {
            return _repositorio.GetTotalDespesaUsuarioByAno(idUsuario, ano);
        }

        public decimal GetTotalReceitaUsaurioByAno(int idUsuario, int ano)
        {
            return _repositorio.GetTotalReceitaUsaurioByAno(idUsuario, ano);
        }
    }
}
