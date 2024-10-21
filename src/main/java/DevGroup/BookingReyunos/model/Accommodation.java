package DevGroup.BookingReyunos.model;

import java.math.BigDecimal;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Accommodation { // Esta entidad representa un alojamiento que puede ser reservado por los usuarios.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private BigDecimal pricePerNight;
    
    @ManyToOne
    private User owner;
    
    @OneToMany(mappedBy = "accommodation")
    private List<Booking> bookings;

}
