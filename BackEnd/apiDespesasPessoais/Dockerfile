FROM mcr.microsoft.com/dotnet/core/aspnet:2.1-stretch-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:2.1-stretch AS build
WORKDIR /src
COPY ["apiDespesasPessoais/apiDespesasPessoais.csproj", "apiDespesasPessoais/"]
RUN dotnet restore "apiDespesasPessoais/apiDespesasPessoais.csproj"
COPY . .
WORKDIR "/src/apiDespesasPessoais"
RUN dotnet build "apiDespesasPessoais.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "apiDespesasPessoais.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "apiDespesasPessoais.dll"]