package com.cibertec.registroempleados.controller;

import com.cibertec.registroempleados.model.Departamento;
import com.cibertec.registroempleados.service.DepartamentoService;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/departamento")
public class DepartamentoController {

    private final DepartamentoService departamentoService;

    @GetMapping
    public ResponseEntity<List<Departamento>> getAllDepartamento(){
    	List<Departamento> dpto = departamentoService.listar();
    	if(dpto.isEmpty()) {
    		return ResponseEntity.noContent().build();
    	}
    	return ResponseEntity.ok(dpto);
    }
    @PostMapping
    public ResponseEntity<Departamento> save(@RequestBody Departamento departamento){
    	return new ResponseEntity<Departamento>(departamentoService.guardar(departamento),HttpStatus.CREATED);
    }
}
