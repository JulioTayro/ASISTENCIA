package com.cibertec.registroempleados.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "empleado")
@Data
public class Empleado {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String apellido;
    private String correo;
    @Column(name = "telefono")
    private String telefono;
    @JoinColumn(name = "fecha_ingreso")
    private LocalDate fechaIngreso;
    private String dni;
    @ManyToOne
    @JoinColumn(name = "departamento_id")
    private Departamento departamento;
}
