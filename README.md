# Vue Components

Componentes de UI para Vue.js.

## Iniciando

Este pacote traz uma série de componentes Vue para serem usados no desenvolvimento dos produtos da CTVoicer. Os componentes seguem todas as regras de estilo CSS estabelecidas pela empresa.

### Pré-requisitos

- [Vue.js](https://vuejs.org/) >= 2.0

Recomendações:

- [FontAwesome](https://fontawesome.com/) >= 5.0
- [Bulma](https://bulma.io/) >= 0.8
- [Buefy](https://buefy.org/) >= 0.8

### Instalando

Em um projeto Vue, instale este pacote como uma dependência de desenvolvimento através do npm:

```bash
npm i --save @ctvoicer/vue-components
```

## Uso

Importe o pacote para dentro do seu projeto:

```javascript
import Vue from "vue";
import VueComponents from "@ctvoicer/vue-components";
import "~@ctvoicer/vue-components/dist/vue-components.css";

Vue.use(VueComponents);
```
