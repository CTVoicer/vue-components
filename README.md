# Vue Components

Componentes de UI para Vue.js.

## Iniciando

Este pacote traz uma série de componentes Vue para serem usados no desenvolvimento dos produtos da CTVoicer.

Os componentes seguem todas as regras de estilo CSS estabelecidas para a CTVoicer. Desta forma, o pacote traz consigo o [FontAwesome](http://fontawesome.com) como pacote de ícones, o [CTStyle](https://dev.azure.com/CTVoicer/CTStyle) como customização do framework CSS Bulma e o [Buefy](https://buefy.org/), para facilitar ainda mais o desenvolvimento das interfaces.

### Pré-requisitos

Uma vez que os pacotes FontAwesome, CTStyle e Buefy já estão embutidos neste projeto, você não precisa importá-los individualmente dentro da aplicação.

O único pré-requisito é o próprio Vue.js versão >= 2.

### Instalando

Em um projeto Vue, instale este pacote como uma dependência de desenvolvimento através do npm:

```bash
npm i --save-dev @ctvoicer/vue-components
```

## Uso

Importe o pacote completo (*recomendado*) para dentro do seu projeto:

```javascript
import Vue from 'vue'
import VueComponents from '@ctvoicer/vue-components'
import '@ctvoicer/vue-components/dist/vue-components.css'

Vue.use(VueComponents)
```

Se você precisa apenas de alguns poucos componentes, talvez seja uma boa ideia incluir estes componentes individualmente.

```javascript
import Vue from 'vue'
import { Input } from 'buefy/dist/components/input'
import { Navbar } from '@ctvoicer/vue-components'
import '@ctvoicer/vue-components/dist/vue-components.css'

Vue.component('b-input', Input)
Vue.component('ct-navbar', Navbar)
```

Tenha em mente que cada componente inclui tudo o que ele precisa para funcionar sozinho — Ao incluir muitos componentes individualmente, você pode acabar **AUMENTANDO** desnecessariamente o tamanho final do seu projeto. Neste caso é recomendado incluir este pacote por completo.

No geral, **não inclua mais de três componentes individuais** em seu projeto. Se você precisa usar mais componentes que isso, considere importar todo o pacote.

## Customização

Você também pode importar o arquivo de variáveis do CTStyle para dentro do seu projeto e usá-las para criar estilos customizados para seus próprios componentes.

```scss
@import "~@ctvoicer/ctstyle/src/utilities/initial-variables";
```
