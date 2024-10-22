package DevGroup.BookingReyunos.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginDTO {
    private String username;
    private String password;
    private String token;

    public LoginDTO(String username, String token){
        this.username = username;
        this.token = token;
    }
}
