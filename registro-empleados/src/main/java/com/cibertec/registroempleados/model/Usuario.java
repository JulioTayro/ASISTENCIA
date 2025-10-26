package com.cibertec.registroempleados.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "usuario")
@Data
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nombre_usuario", nullable = false, unique = true)
    private String nombreUsuario;

    private String clave;

    @ManyToOne
    @JoinColumn(name = "empleado_id")
    private Empleado empleado;
}
