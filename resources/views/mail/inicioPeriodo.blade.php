@component('mail::message')
Bienvenido al Nuevo perido Agosto-Diciembre 2019. Como parte de tu cumplimiento de beca,
se te realizará una asignación con un colaborador de la institución. Para ingresar al nuevo 
sistema es requerido que ingreses tus datos con tu correo institucional.

Si es la primera vez que ingresas a nuestro sistema, por favor haz click en Verificar Cuenta
@component('mail::button', ['url' => $url ])
Verificar Cuenta
@endcomponent

Es importante que estes al tanto de tu asignación. En cuanto seas asignado te llegará un 
correo electrónico a esta misma cuenta. 

Atte. Becas <br>
{{ config('app.name') }}
@endcomponent