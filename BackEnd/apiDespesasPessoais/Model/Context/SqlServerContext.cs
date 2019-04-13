﻿using Microsoft.EntityFrameworkCore;

namespace apiDespesasPessoais.Model.Context
{
    public class SqlServerContext : DbContext
    {
        public SqlServerContext()
        {

        }

        public SqlServerContext(DbContextOptions<SqlServerContext> options) : base(options)
        {

        }

        public DbSet<ControleAcesso> ControleAcesso { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Categoria> Categoria { get; set; }
    }
}
