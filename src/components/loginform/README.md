# CtLoginForm

## Props

<!-- @vuese:CtLoginForm:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|email|Campo `email`|`String`|`false`|-|
|password|Campo `password`|`String`|`false`|-|
|errors|Mensagens de erro devido à validação dos campos|`Object`|`false`|O valor padrão é: {}|

<!-- @vuese:CtLoginForm:props:end -->


## Events

<!-- @vuese:CtLoginForm:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|update:email|Atualiza o valor do campo `email`.|O argumento é uma `String` representando o valor inserido pelo usuário.|
|update:password|Atualiza o valor do campo `password`.|O argumento é uma `String` representando o valor inserido pelo usuário.|
|login|Disparado quando o usuário clicar no botão `login`.|-|

<!-- @vuese:CtLoginForm:events:end -->


