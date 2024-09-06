package DevGroup.BookingReyunos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import DevGroup.BookingReyunos.dto.UserDTO;
import DevGroup.BookingReyunos.dto.LoginDTO;
import DevGroup.BookingReyunos.dto.TokenDTO;
import DevGroup.BookingReyunos.model.User;
import DevGroup.BookingReyunos.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser(@RequestBody UserDTO userDTO) {
        User user = userService.register(userDTO);
        return ResponseEntity.ok(new UserDTO(user));
    }

    @PostMapping("/login")
    public ResponseEntity<TokenDTO> loginUser(@RequestBody LoginDTO loginDTO) {
        String token = userService.authenticate(loginDTO);
        return ResponseEntity.ok(new TokenDTO(token));
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserProfile(@PathVariable Integer id) {
        User user = userService.getUser(id);
        return ResponseEntity.ok(new UserDTO(user));
    }
}
