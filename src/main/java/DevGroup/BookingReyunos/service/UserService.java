package DevGroup.BookingReyunos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import DevGroup.BookingReyunos.dto.LoginDTO;
import DevGroup.BookingReyunos.dto.UserDTO;
import DevGroup.BookingReyunos.model.User;
import DevGroup.BookingReyunos.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User register(UserDTO userDTO) {
        // Convertir DTO en Entity
        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));

        // Guardar usuario en el repositorio
        return userRepository.save(user);
    }

    public String authenticate(LoginDTO loginDTO) {
        // Buscar usuario por username
        User user = userRepository.findByUsername(loginDTO.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Comprobar contraseña
        if (passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) {
            // Generar token JWT
            return "Generated JWT Token";
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }

    public User getUser(Integer id) {
        // Buscar usuario por ID
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}
