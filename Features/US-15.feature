Scenario: La agencia de viajes registra un imagenes de  transport con información válida
Given que la agencia de viajes está en el panel de administración
When el usuario hace clic en " imagenes de  transport "
And llena los campos con información válida
And haga clic en "Add"
Then se creará un imagenes de  transport en la base de datos con la información proporcionada
 
Scenario: La agencia de viajes registra un imagenes de  transport con información inválida
Given que la agencia de viajes está en el panel de administración
When el usuario hace clic en " imagenes de  transport "
And llena los campos con información inválida
And haga clic en "Add"
Then se resaltarán los campos con información no válida
 
Scenario: La agencia de viajes registra un transport imagenes de  transport  con información válida
Given que la agencia de viajes está en el panel de administración 
When hace clic en un imagenes de  transport
And haga clic en "Modificar"
And aparece un formulario de modificación con los datos actuales del imagenes de  transport
And llena los campos con información válida
And haga clic en "Modificar"
Then el imagenes de  transport seleccionado se actualizará en la base de datos con la información brindada
 
Scenario: La agencia de viajes modifica un imagenes de  transport con información inválida
Given que la agencia de viajes está en el panel de administración del imagenes de  transport
When la agencia de viaje hace clic en un imagenes de  transport
And haga clic en "Modificar"
And aparece un formulario de modificación
And llena los campos con información inválida
And haga clic en "Modificar"
Then se resaltarán los campos con información no válida
 
Scenario: La agencia de viajes elimina un imagenes de  transport
Given que la agencia de viajes está en el panel de administración 
When hace clic en un imagenes de  transport
And haga clic en "Eliminar"
Then el imagenes de  transport seleccionado será eliminado
