Scenario: El administrador ingresa a su cuenta con datos correctos
Given que el administrador se encuentra en la pantalla de login
When el administrador hace click en el campo "usuario" e ingresa su usuario
And el administrador hace click en el campo "contraseña" e ingresa su contrasña
And el administrador hace click en el boton "Login"
Then se mostrará la pantalla de inicio

Scenario: El administrador ingresa a su cuenta con usuario invalido
Given que el administrador se encuentra en la pantalla de login
When el administrador hace click en el campo "usuario" e ingresa su usuario de manera incorrecta
And el administrador hace click en el campo "contraseña" e ingresa su contraseña
And el administrador hace click en el boton "Login"
Then se mostrará un mensaje de error y se solicitara reingresar los datos

Scenario: El administrador ingresa a su cuenta con contraseña invalida
Given que el administrador se encuentra en la pantalla de login
When el administrador hace click en el campo "usuario" e ingresa su usuario
And el administrador hace click en el campo "contraseña" e ingresa su contraseña de manera incorrecta
And el administrador hace click en el boton "Login"
Then se mostrará un mensaje de error y se solicitara reingresar los datos
