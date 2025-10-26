package com.cibertec.registroempleados.service;


import com.cibertec.registroempleados.model.Departamento;
import com.cibertec.registroempleados.repository.DepartamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepartamentoService {

    @Autowired
    private DepartamentoRepository repository;

    public List<Departamento> listar() {
        return repository.findAll();
    }

    public Departamento guardar(Departamento departamento) {
        return repository.save(departamento);
    }

    public Optional<Departamento> obtenerPorId(Long id) {
        Optional<Departamento> optional = repository.findById(id);
        if(optional.isPresent())
        	return optional;
        return Optional.empty();
    }


}
