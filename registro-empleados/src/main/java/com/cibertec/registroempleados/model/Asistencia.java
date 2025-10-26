package com.cibertec.registroempleados.model;

import java.time.LocalDate;
import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonFormat;

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
@Table(name = "asistencia")
@Data

public class Asistencia {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate fecha;
    @JsonFormat(pattern = "HH:mm:ss")
    @Column(name = "hora_entrada")
    private LocalTime horaEntrada;
    @JsonFormat(pattern = "HH:mm:ss")
    @Column(name = "hora_salida")
    private LocalTime horaSalida;

    @ManyToOne
    @JoinColumn(name = "empleado_id")
    private Empleado empleado;

}
