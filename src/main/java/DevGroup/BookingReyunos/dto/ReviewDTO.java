package DevGroup.BookingReyunos.dto;

import lombok.Data;

@Data
public class ReviewDTO {
    private Integer id;
    private Integer rating;
    private String comment;
    private Integer guestId; // Referencia al huésped
    private Integer accommodationId; // Referencia al alojamiento
}