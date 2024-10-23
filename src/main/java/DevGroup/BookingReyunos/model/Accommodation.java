package DevGroup.BookingReyunos.model;

import java.math.BigDecimal;
import java.util.List;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Accommodation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String description;
    private BigDecimal pricePerNight;

    @ManyToOne
    @JoinColumn(name = "owner_id") // Define la columna de la FK en la tabla accommodation
    private User owner;

    @OneToMany(mappedBy = "accommodation", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Booking> bookings;
}
