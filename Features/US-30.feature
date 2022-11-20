Scenario: La agencia de viajes registra un accommodation con información válida 
Given que la agencia de viajes está en el panel de administración 
When el usuario hace clic en "lifetravelapp/api/v1/accommodations"  
And llena los campos con información válida
And haga clic en "POST" 
Then se creará un accommodation en la base de datos con la información proporcionada 

Scenario: La agencia de viajes registra un accommodation con información inválida 
Given que la agencia de viajes está en el panel de administración  
When el usuario hace clic en "lifetravelapp/api/v1/accommodations"  
And llena los campos con información inválida 
And haga clic en "POST" 
Then se mostrará un error con el validation

Scenario:La agencia de viajes modifica un accommodation con información válida 
Given que la agencia de viajes está en el panel de administración   
When coloque el id del accommodations a modificar
And este sea correcto
And llene los campos con informacion valida
And haga clic en "PUT" 
Then el accommodation seleccionado se actualizará en la base de datos con la información brindada 

Scenario: La agencia de viajes modifica un accommodation con información inválida 
Given que la agencia de viajes está en el panel de administración   
When coloque el id del accommodation a modificar
And este sea incorrecto
And llene los campos con informacion invalida
And haga clic en "PUT" 
Then se mostrara un error con el validator

Scenario: La agencia de viajes elimina un accommodation de manera correcta
Given  que la agencia de viajes está en el panel de administración  
When coloque el id del accommodation a eliminar 
And haga clic en "DELETE"  
Then el accommodation seleccionado será eliminado 

Scenario: La agencia de viajes elimina un accommodation de manera incorrecta
Given  que la agencia de viajes está en el panel de administración  
When coloque el id de forma incorrecta del accommodation a eliminar 
And haga clic en "DELETE"  
Then se mostrara un error con el validatora 
