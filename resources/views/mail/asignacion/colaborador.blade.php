@component('mail::message')

{{$name}},
Tu asignación para este perido Agosto-Diciembre 2019 ha sido creada.

Tu becario es {{$estudiante->name}}.

Te compartimos su informacion para que puedas ponerte en contacto lo mas antes posible.

Correo:   {{ $estudiante->email }}
Carrera:  {{ $estudiante->carrera->nombre }}
Semestre: {{ $estudiante->semestre_actual }}

Atte. Becas <br>
{{ config('app.name') }}
@endcomponent