package DevGroup.BookingReyunos.dto;

import lombok.Data;

@Data
public class UserRoleDTO {
    private String username;
    private String role; // ADMIN, OWNER, GUEST
}