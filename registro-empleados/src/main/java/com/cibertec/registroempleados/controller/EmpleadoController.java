package com.cibertec.registroempleados.controller;

import com.cibertec.registroempleados.model.Departamento;
import com.cibertec.registroempleados.model.Empleado;
import com.cibertec.registroempleados.service.EmpleadoService;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/empleado")
public class EmpleadoController {

    private final EmpleadoService empleadoService;
    
   @GetMapping
   public ResponseEntity<List<Empleado>> getAllEmpleado(){
	   List<Empleado> empleados = empleadoService.listarEmpleado();
	   if(empleados.isEmpty()) {
		return ResponseEntity.noContent().build();   
	   }
	return ResponseEntity.ok(empleados);
   }
   @GetMapping("/{id}")
   public ResponseEntity<Empleado> getEmpleadoById(@PathVariable Long id) throws Exception{
	   Empleado empleado = empleadoService.obtenerPorId(id).orElseThrow(
			   () -> new Exception("El empleado no existe"));
	   return ResponseEntity.ok(empleado);
   }
   @PostMapping
   public ResponseEntity<Empleado> guardarEmpleado(@RequestBody Empleado empleado){
	   return new ResponseEntity<Empleado>(empleadoService.guardarEmpleado(empleado),HttpStatus.CREATED);
   }
   @PutMapping("/{id}")
   public ResponseEntity<Empleado> updateEmpleado(@PathVariable Long id,@RequestBody Empleado empleado)
		   throws Exception{
	   Empleado emp = empleadoService.obtenerPorId(id).orElseThrow(
			   () -> new Exception("El empleado no existe"));
	   emp.setNombre(empleado.getNombre());
	   emp.setApellido(empleado.getApellido());
	   emp.setCorreo(empleado.getCorreo());
	   emp.setTelefono(empleado.getTelefono());
	   emp.setFechaIngreso(empleado.getFechaIngreso());
	   emp.setDni(empleado.getDni());
	   Departamento departamento = new Departamento();
	   departamento.setId(empleado.getDepartamento().getId());
	   emp.setDepartamento(departamento);
	   return new ResponseEntity<Empleado>(empleadoService.guardarEmpleado(emp),HttpStatus.OK);
   }
    
}
