package DevGroup.BookingReyunos.model;

import org.hibernate.annotations.MapKeyCompositeType;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.ToString;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString

@Entity
public class User { 
// esta entidad representa a los usuarios del sistema, que pueden ser administradores, propietarios o huéspedes.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String username;
    private String password;
    private String email;
    
    @Enumerated(EnumType.STRING)
    private Role role; // ADMIN, OWNER, GUEST.

    // Relaciones
    @OneToMany(mappedBy = "owner")
    private List<Accommodation> accommodations;
    
    @OneToMany(mappedBy = "guest")
    private List<Booking> bookings;
}

enum Role {
    ADMIN,
    OWNER,
    GUEST
}