FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk AS build
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