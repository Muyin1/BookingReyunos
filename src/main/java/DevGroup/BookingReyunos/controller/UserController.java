package DevGroup.BookingReyunos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import DevGroup.BookingReyunos.dto.UserDTO;
import DevGroup.BookingReyunos.dto.ForgotPasswordRequest;
import DevGroup.BookingReyunos.dto.ResetPasswordRequest;
import DevGroup.BookingReyunos.dto.LoginDTO;
import DevGroup.BookingReyunos.dto.TokenDTO;
import DevGroup.BookingReyunos.model.User;
import DevGroup.BookingReyunos.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    // Registro de usuario
    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser(@RequestBody UserDTO userDTO) {
        User user = userService.register(userDTO);
        return ResponseEntity.ok(new UserDTO(user));
    }

    // Inicio de sesión
    @PostMapping("/login")
    public ResponseEntity<TokenDTO> loginUser(@RequestBody LoginDTO loginDTO) {
        String token = userService.authenticate(loginDTO);
        return ResponseEntity.ok(new TokenDTO(token));
    }

    // Consulta del perfil del usuario por ID
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserProfile(@PathVariable Integer id) {
        User user = userService.getUser(id);
        return ResponseEntity.ok(new UserDTO(user));
    }

    // Solicitud de restablecimiento de contraseña
    @PostMapping("/forgot-password")
    public ResponseEntity<String> forgotPassword(@RequestBody ForgotPasswordRequest request) {
        userService.sendResetPasswordToken(request.getEmail());
        return ResponseEntity.ok("Correo de restablecimiento enviado.");
    }

    // Restablecimiento de contraseña usando el token
    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody ResetPasswordRequest request) {
        userService.resetPassword(request.getToken(), request.getNewPassword());
        return ResponseEntity.ok("Contraseña restablecida exitosamente.");
    }
}
