package com.cibertec.registroempleados.service;


import com.cibertec.registroempleados.model.Asistencia;
import com.cibertec.registroempleados.repository.AsistenciaRepository;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class AsistenciaService {

    @Autowired
    private AsistenciaRepository repository;

    public List<Asistencia> listar() {
        return repository.findAll();
    }
    @Transactional
    public Asistencia guardar(Asistencia asistencia) {
        return repository.save(asistencia);
    }

    public  Optional<Asistencia> obtenerPorId(Long id) {
        Optional<Asistencia> optional = repository.findById(id);
        if(optional.isPresent()) {
        	return optional;
        }
        return Optional.empty();
    }
    public List<Asistencia> listarAsistenciasHoy(LocalDate fecha){
    	return repository.findByFecha(fecha);
    }
}
