Scenario: El usuario ingresa a la plataforma mediante credenciales correctas
Given que usuario viajero se encuentra en el login
When llenen sus credenciales de manera correcta
And le dan click al botón “Login”
Then accederá a la página web
 
Scenario: El usuario ingresa a la plataforma mediante credenciales incorrectas
Given que usuario viajero se encuentra en el login
When llenen sus credenciales de manera incorrecta
And le dan click al botón “Login”
Then se le mostrara un aviso de contraseña incorrecta
