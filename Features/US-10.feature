Scenario: La agencia de viajes registra un accommodation con información válida
Given que la agencia de viajes está en el panel de administración
When el usuario hace clic en " accommodation "
And llena los campos con información válida
And haga clic en "Add"
Then se creará un accommodation en la base de datos con la información proporcionada
 
Scenario: La agencia de viajes registra un accommodation con información inválida
Given que la agencia de viajes está en el panel de administración
When el usuario hace clic en " accommodation "
And llena los campos con información inválida
And haga clic en "Add"
Then se resaltarán los campos con información no válida
 
Scenario: La agencia de viajes registra un accommodation con información válida
Given que la agencia de viajes está en el panel de administración 
When hace clic en un accommodation
And haga clic en "Modificar"
And aparece un formulario de modificación con los datos actuales del accommodation
And llena los campos con información válida
And haga clic en "Modificar"
Then el accommodation seleccionado se actualizará en la base de datos con la información brindada
 
Scenario: La agencia de viajes modifica un accommodation con información inválida
Given que la agencia de viajes está en el panel de administración del accommodation
When la agencia de viaje hace clic en un accommodation
And haga clic en "Modificar"
And aparece un formulario de modificación
And llena los campos con información inválida
And haga clic en "Modificar"
Then se resaltarán los campos con información no válida
 
Scenario: La agencia de viajes elimina un accommodation
Given que la agencia de viajes está en el panel de administración 
When hace clic en un accommodation
And haga clic en "Eliminar"
Then el accommodation seleccionado será eliminado
