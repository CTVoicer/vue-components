# CtNavbar

## Props

<!-- @vuese:CtNavbar:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|product|Nome do produto que será exibido junto ao logotipo da CTVoicer.|`String`|`true`|-|
|breakpoint|Altera o breakpoint que define a largura do container.|`is-fluid` / `is-widescreen` / `is-fullhd`|`false`|O valor padrão é: `is-fluid`|
|logoLink|Destino da URL do logotipo. Se deixado em branco, o logotipo não terá nenhum link.|Pode ser uma URL literal (`String`) ou um objeto do Vue Router (`Object`).|`false`|-|

<!-- @vuese:CtNavbar:props:end -->


## Slots

<!-- @vuese:CtNavbar:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|menu|Conteúdo do `.navbar-menu` conforme a documentação do Bulma: https://bulma.io/documentation/components/navbar/#navbar-menu.|-|

<!-- @vuese:CtNavbar:slots:end -->


