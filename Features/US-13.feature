Scenario: La agencia de viajes registra un accommodation con información válida
Given que la agencia de viajes está en el panel de administración
When el usuario hace clic en " images de  accomadation "
And llena los campos con información válida
And haga clic en "Add"
Then se creará un images de  accomadation en la base de datos con la información proporcionada
 
Scenario: La agencia de viajes registra un accommodation con información inválida
Given que la agencia de viajes está en el panel de administración
When el usuario hace clic en " images de  accomadation "
And llena los campos con información inválida
And haga clic en "Add"
Then se resaltarán los campos con información no válida
 
Scenario: La agencia de viajes registra un accommodation con información válida
Given que la agencia de viajes está en el panel de administración 
When hace clic en un images de  accomadation
And haga clic en "Modificar"
And aparece un formulario de modificación con los datos actuales del images de  accomadation
And llena los campos con información válida
And haga clic en "Modificar"
Then el images de  accomadation seleccionado se actualizará en la base de datos con la información brindada
 
Scenario: La agencia de viajes modifica un accommodation con información inválida
Given que la agencia de viajes está en el panel de administración del accommodation
When la agencia de viaje hace clic en un images de  accomadation
And haga clic en "Modificar"
And aparece un formulario de modificación
And llena los campos con información inválida
And haga clic en "Modificar"
Then se resaltarán los campos con información no válida
 
Scenario: La agencia de viajes elimina un images de  accomadation
Given que la agencia de viajes está en el panel de administración 
When hace clic en un images de  accomadation
And haga clic en "Eliminar"
Then el images de  accomadation seleccionado será eliminado
