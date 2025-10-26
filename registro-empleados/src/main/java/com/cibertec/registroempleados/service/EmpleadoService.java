package com.cibertec.registroempleados.service;


import com.cibertec.registroempleados.model.Empleado;
import com.cibertec.registroempleados.repository.EmpleadoRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@RequiredArgsConstructor
@Service
public class EmpleadoService {
    private final EmpleadoRepository empleadoRepository;
    public List<Empleado> listarEmpleado() {
        return empleadoRepository.findAll();
    }

    public Empleado guardarEmpleado(Empleado empleado) {
    	return empleadoRepository.save(empleado);
    }

    public Optional<Empleado> obtenerPorId(Long id) {
        Optional<Empleado> empleado = empleadoRepository.findById(id);
        if(empleado.isPresent()) 
        	return empleado;
        return Optional.empty();
    }
    
}
