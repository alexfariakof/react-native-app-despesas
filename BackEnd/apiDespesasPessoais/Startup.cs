using apiDespesasPessoais.Business;
using apiDespesasPessoais.Business.Implementations;
using apiDespesasPessoais.Model.Context;
using apiDespesasPessoais.Repositorio;
using apiDespesasPessoais.Repositorio.Generic;
using apiDespesasPessoais.Repositorio.Implementations;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;

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

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1",
                    new Info
                    {
                        Title = "API RESTfull Despesas Pessoais",
                        Version = "v1"
                    });

            });

            // Injeção de Dependencia 
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

            app.UseSwagger();

            app.UseSwaggerUI(c => {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });

            //Starting our API in Swagger page
            var option = new RewriteOptions();
            option.AddRedirect("^$", "swagger");
            app.UseRewriter(option);

            var options = new RewriteOptions();
            options.AddRedirect("^$", "swagger");
            app.UseRewriter(options);

            app.UseMvc();
        }
    }
}

