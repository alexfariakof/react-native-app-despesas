using apiDespesasPessoais.Business;
using apiDespesasPessoais.Business.Generic;
using apiDespesasPessoais.Business.Implementations;
using apiDespesasPessoais.Model.Context;
using apiDespesasPessoais.Repositorio;
using apiDespesasPessoais.Repositorio.Generic;
using apiDespesasPessoais.Repositorio.Implementations;
using apiDespesasPessoais.Security.Configuration;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.Swagger;
using System;

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
            string connection = Configuration["SqlServerConnection:SqlServerConnectionString"];
            services.AddDbContext<SqlServerContext>(options => options.UseSqlServer(connection));
            // Fim de configuração com banco de dados
            
            // Configura Autorização para uso do Rest
            this.ConfigureAutorization(services);

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1",
                    new Info
                    {
                        Title = "API REST Despesas Pessoais",
                        Version = "v1"
                    });

            });

            // Injeção de Dependencia 
            //services.AddScoped<ICategoriaBusiness, CategoriaBusinessImpl>();
            //services.AddScoped<IUsuarioBusiness, UsuarioBusinessImpl>();
            services.AddScoped(typeof(IBusiness<>), typeof(GenericBusiness<>));
            services.AddScoped<IControleAcessoBusiness, ControleAcessoBusinessImpl>();
            services.AddScoped<ILancamentoBusiness, LancamentoBusinessImpl>();
            services.AddScoped<IRelatorioBusiness, RelatorioBusinessImpl>();
            services.AddScoped<IFileBusiness, FileBusinessImpl>();

            //services.AddScoped<IUsuarioRepositorio, UsuarioRepositorioImpl>();
            services.AddScoped<IControleAcessoRepositorio, ControleAcessoRepositorioImpl>();
            services.AddScoped<ILancamentoRepositorio, LancamentoRepositorioImpl>();
            services.AddScoped<IRelatorioRepositorio, RelatorioRepositorioImpl>();

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
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "API Despesas Pessoais V1");
            });

            //Starting our API in Swagger page
            RewriteOptions option = new RewriteOptions();
            option.AddRedirect("^$", "swagger");
            app.UseRewriter(option);

            RewriteOptions options = new RewriteOptions();
            options.AddRedirect("^$", "swagger");
            app.UseRewriter(options);

            app.UseMvc();
        }


        private void ConfigureAutorization(IServiceCollection services)
        {
            Security.Configuration.SigningConfigurations signingConfigurations = new Security.Configuration.SigningConfigurations();
            services.AddSingleton(signingConfigurations);

            TokenConfiguration tokenConfigurations = new TokenConfiguration();

            new ConfigureFromConfigurationOptions<TokenConfiguration>(
                Configuration.GetSection("TokenConfigurations")
            )
            .Configure(tokenConfigurations);

            services.AddSingleton(tokenConfigurations);


            services.AddAuthentication(authOptions =>
            {
                authOptions.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                authOptions.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(bearerOptions =>
            {
                Microsoft.IdentityModel.Tokens.TokenValidationParameters paramsValidation = bearerOptions.TokenValidationParameters;
                paramsValidation.IssuerSigningKey = signingConfigurations.Key;
                paramsValidation.ValidAudience = tokenConfigurations.Audience;
                paramsValidation.ValidIssuer = tokenConfigurations.Issuer;

                // Validates the signing of a received token
                paramsValidation.ValidateIssuerSigningKey = true;

                // Checks if a received token is still valid
                paramsValidation.ValidateLifetime = true;

                // Tolerance time for the expiration of a token (used in case
                // of time synchronization problems between different
                // computers involved in the communication process)
                paramsValidation.ClockSkew = TimeSpan.Zero;
            });

            // Enables the use of the token as a means of
            // authorizing access to this project's resources
            services.AddAuthorization(auth =>
            {
                auth.AddPolicy("Bearer", new AuthorizationPolicyBuilder()
                    .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme‌​)
                    .RequireAuthenticatedUser().Build());
            });
        }
    }
}