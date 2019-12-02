# Nubank Mobile Teste

## Como rodar o projeto:

### Android
- `npm install`
- `react-native link`
- `react-native run-android`

### iOS
- `npm install`
- `pod install` na pasta ios
- `react-native link`
- `react-native run-ios`

## O que foi feito:

- tela com o grid de ofertas e nome do usuário
- detalhes da oferta
- modal com detalhes do pedido a ser efetuado

## Como foi feito:

- foi usado react-native v0.61 para geração das telas nativas do app
- para rápida inicialização foi usado o um template já com as configs do Typescript e parte da estrtura de um outro template meu chamado `Shin-Template`
- como mencionado todo o projeto é baseado em TS e com ampla cobertura de tipagem
- foi usado styled-components para estilização e criação de components reutilizáveis na medida do possível
- para as chamadas Graphql foi usado o Apollo Client
- o gerenciamento de estado foi feito com o próprio cache do Apollo Client
- para navegação foi utilizado o React Navigation que também foi utilizado como transportador de props entre telas e também para criação do header
- a estrutura base do projeto se encontra dentro da pasta /js onde a estrutura tenta ao máximo centralizar informações e evitar repetição de código sem necessidade
- para testes unitários foi usado o react-native-testing-library

## O que eu vou ficar devendo:

- testes E2E
- farm tests para comportamento em diferentes devices
- melhor tratamento de error para inicialização do app sem internet
