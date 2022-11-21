Scenario: La agencia de viajes registra un tour con información válida
Given que la agencia de viajes está en el panel de administración
When el usuario hace clic en " images de  tours "
And llena los campos con información válida
And haga clic en "Add"
Then se creará un images de  tours en la base de datos con la información proporcionada
 
Scenario: La agencia de viajes registra un images de  tours  con información inválida
Given que la agencia de viajes está en el panel de administración
When el usuario hace clic en " tour"
And llena los campos con información inválida
And haga clic en "Add"
Then se resaltarán los campos con información no válida
 
Scenario: La agencia de viajes registra un images de  tours con información válida
Given que la agencia de viajes está en el panel de administración 
When hace clic en un tour
And haga clic en "Modificar"
And aparece un formulario de modificación con los datos actuales del images de  tours
And llena los campos con información válida
And haga clic en "Modificar"
Then el images de  tours seleccionado se actualizará en la base de datos con la información brindada
 
Scenario: La agencia de viajes modifica un images de  tours con información inválida
Given que la agencia de viajes está en el panel de administración del tour
When la agencia de viaje hace clic en un images de  tours
And haga clic en "Modificar"
And aparece un formulario de modificación
And llena los campos con información inválida
And haga clic en "Modificar"
Then se resaltarán los campos con información no válida
 
Scenario: La agencia de viajes elimina un images de  tours
Given que la agencia de viajes está en el panel de administración 
When hace clic en un images de  tours
And haga clic en "Eliminar"
Then el images de  tours seleccionado será eliminado
