Scenario: La agencia de viajes registra un tour con información válida 
Given que la agencia de viajes está en el panel de administración 
When el usuario hace clic en "Tours-Controller"  
And llena los campos con información válida
And haga clic en "Add" 
Then se creará un tour en la base de datos con la información proporcionada 

Scenario: La agencia de viajes registra un tour con información inválida 
Given que la agencia de viajes está en el panel de administración  
When el usuario hace clic en "Tours-Controller"  
And llena los campos con información inválida 
And haga clic en "Add" 
Then se mostrará un error con el validation

Scenario:La agencia de viajes modifica un tour con información válida 
Given que la agencia de viajes está en el panel de administración   
When coloque el id del tour a modificar
And este sea correcto
And llene los campos con informacion valida
And haga clic en "Modificar" 
Then el tour seleccionado se actualizará en la base de datos con la información brindada 

Scenario: La agencia de viajes modifica un tour con información inválida 
Given que la agencia de viajes está en el panel de administración   
When coloque el id del tour a modificar
And este sea incorrecto
And llene los campos con informacion invalida
And haga clic en "Modificar" 
Then se mostrara un error con el validatora 

Scenario: La agencia de viajes elimina un tour de manera correcta
Given  que la agencia de viajes está en el panel de administración  
When coloque el id del tour a eliminar 
And haga clic en "Eliminar"  
Then el tour seleccionado será eliminado 

Scenario: La agencia de viajes elimina un tour de manera incorrecta
Given  que la agencia de viajes está en el panel de administración  
When coloque el id de forma incorrecta del tour a eliminar 
And haga clic en "Eliminar"  
Then se mostrara un error con el validatora 
