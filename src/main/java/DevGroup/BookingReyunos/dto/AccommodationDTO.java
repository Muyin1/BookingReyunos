package DevGroup.BookingReyunos.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class AccommodationDTO {
    private Integer id;
    private String name;
    private String description;
    private String location;
    private BigDecimal pricePerNight;
    private Long ownerId; // Referencia al propietario

    // Getters y Setters
}
