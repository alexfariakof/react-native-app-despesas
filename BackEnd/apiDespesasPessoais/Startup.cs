using apiDespesasPessoais.Business;
using apiDespesasPessoais.Business.Implementations;
using apiDespesasPessoais.Model.Context;
using apiDespesasPessoais.Repositorio;
using apiDespesasPessoais.Repositorio.Generic;
using apiDespesasPessoais.Repositorio.Implementations;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace apiDespesasPessoais
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Configuração de Conexão com Bando de Dados
            var connection = Configuration["SqlServerConnection:SqlServerConnectionString"];
            services.AddDbContext<SqlServerContext>(options => options.UseSqlServer(connection));
            // Fim de configuração com banco de dados

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            // Injeçaõ de Dependencia 
            services.AddScoped<ICategoriaBusiness, CategoriaBusinessImpl>();
            services.AddScoped<IUsuarioBusiness, UsuarioBusinessImpl>();
            //services.AddScoped<IUsuarioRepositorio, UsuarioRepositorioImpl>();

            services.AddScoped(typeof(IRepositorio<>), typeof(GenericRepositorio<>));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }
    }
}

