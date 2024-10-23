package DevGroup.BookingReyunos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import DevGroup.BookingReyunos.model.Accommodation;

public interface AccommodationRepository extends JpaRepository<Accommodation, Integer> {
    List<Accommodation> findByOwner_Id(Integer ownerId); // Uso de "owner.id" para la consulta
}