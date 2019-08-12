@component('mail::message')

{{$name}},
Tu asignación para este perido Agosto-Diciembre 2019 ha sido creada.

Tu servicio becario lo cumpliras con {{$colaborador->name}}.

Te compartimos su informacion para que puedas ponerte en contacto lo mas antes posible.

Correo: {{ $colaborador->email }}
Ubicacion: {{ $colaborador->oficina }}

Atte. Becas <br>
{{ config('app.name') }}
@endcomponent