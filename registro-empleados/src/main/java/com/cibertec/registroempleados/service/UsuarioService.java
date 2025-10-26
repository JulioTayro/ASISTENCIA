package com.cibertec.registroempleados.service;

import com.cibertec.registroempleados.model.Usuario;
import com.cibertec.registroempleados.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;

    public Optional<Usuario> buscarPorNombreUsuario(String nombreUsuario) {
        return usuarioRepository.findByNombreUsuario(nombreUsuario);
    }

    public void guardar(Usuario usuario) {
        usuarioRepository.save(usuario);
    }
}
