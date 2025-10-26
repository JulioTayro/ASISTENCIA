package com.cibertec.registroempleados.controller;

import com.cibertec.registroempleados.model.Asistencia;
import com.cibertec.registroempleados.service.AsistenciaService;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/asistencia")
public class AsistenciaController {

    private final AsistenciaService asistenciaService;

    @GetMapping
    public ResponseEntity<List<Asistencia>> getAllAsistecias(){
    	List<Asistencia> asistencias = asistenciaService.listar();
    	if(asistencias.isEmpty()) {
    		return ResponseEntity.noContent().build();
    	}
    	return ResponseEntity.ok(asistencias);
    }
    @GetMapping("/hoy")
    public List<Asistencia> getAsistenciasHoy(){
    	LocalDate hoy = LocalDate.now();
    	return asistenciaService.listarAsistenciasHoy(hoy);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Asistencia> getAsistenciaById(Long id)
    throws Exception{
    	Asistencia asistencia = asistenciaService.obtenerPorId(id).orElseThrow(
    			() -> new Exception("No hay registro de su asistencia"));
    	return ResponseEntity.ok(asistencia);
    }
    @PostMapping
    public ResponseEntity<Asistencia> Save(@RequestBody Asistencia asistencia) {
        return new ResponseEntity<Asistencia>(asistenciaService.guardar(asistencia),HttpStatus.CREATED);
    }
    
    @PatchMapping("/{id}")
    public ResponseEntity<Asistencia> Salida(@PathVariable Long id, @RequestBody Asistencia asistencia)
    throws Exception{
    	Asistencia currentAsistencia = asistenciaService.obtenerPorId(id).orElseThrow(
    			() -> new Exception("No hay registro de asistencia"));
    	currentAsistencia.setHoraSalida(LocalTime.now());
    	return new ResponseEntity<Asistencia>(asistenciaService.guardar(currentAsistencia),HttpStatus.OK);
    }
    
   }


