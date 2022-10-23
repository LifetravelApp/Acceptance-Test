Scenario: El usuario accede a la pagina web desde una PC
Given que el usuario tiene el navegador web abierto en una PC
When el usuario hace click en el campo de url
And el usuario escribe la url de la pagina web
And el usuario pulsa el boton "enter"
Then se muestra la pagina web al usuario

Scenario: El usuario accede a la pagina web desde un celular movil
Given que el usuario tiene el navegador web abierto en un celular movil
When el usuario hace click en el campo de url
And el usuario escribe la url de la pagina web
And el usuario pulsa el boton "enter"
Then se muestra la pagina web al usuario
