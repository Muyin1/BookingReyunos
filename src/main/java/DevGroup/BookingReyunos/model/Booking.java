package DevGroup.BookingReyunos.model;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data

@Entity
public class Booking { // Esta clase entidad representa una reserva hecha por un usuario para un alojamiento específico.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private BigDecimal totalPrice;

    @ManyToOne
    private User guest;

    @ManyToOne
    private Accommodation accommodation;

}

