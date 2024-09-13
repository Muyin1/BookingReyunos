package DevGroup.BookingReyunos.exceptions;

public class AccommodationNotFoundException extends RuntimeException {

    // Constructor con un mensaje personalizado
    public AccommodationNotFoundException(String message) {
        super(message);
    }

    // Constructor con un mensaje personalizado y causa
    public AccommodationNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
