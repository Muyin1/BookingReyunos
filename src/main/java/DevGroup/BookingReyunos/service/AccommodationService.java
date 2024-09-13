package DevGroup.BookingReyunos.service;

import DevGroup.BookingReyunos.dto.AccommodationDTO;
import DevGroup.BookingReyunos.exceptions.AccommodationNotFoundException;
import DevGroup.BookingReyunos.model.Accommodation;
import DevGroup.BookingReyunos.repository.AccommodationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AccommodationService {

    @Autowired
    private AccommodationRepository accommodationRepository;

    private AccommodationDTO convertToDTO(Accommodation accommodation) {
        AccommodationDTO dto = new AccommodationDTO();
        dto.setId(accommodation.getId());
        dto.setName(accommodation.getName());
        dto.setDescription(accommodation.getDescription());
        // Otros campos a convertir
        return dto;
    }

    private Accommodation convertToEntity(AccommodationDTO dto) {
        Accommodation accommodation = new Accommodation();
        accommodation.setId(dto.getId());
        accommodation.setName(dto.getName());
        accommodation.setDescription(dto.getDescription());
        // Otros campos a convertir
        return accommodation;
    }

    public List<AccommodationDTO> findAll() {
        List<Accommodation> accommodations = accommodationRepository.findAll();
        return accommodations.stream()
                             .map(this::convertToDTO)
                             .collect(Collectors.toList());
    }

    public AccommodationDTO findById(Integer id) {
        Optional<Accommodation> accommodation = accommodationRepository.findById(id);
        return accommodation.map(this::convertToDTO)
                            .orElseThrow(() -> new AccommodationNotFoundException("Accommodation not found"));
    }

    public AccommodationDTO save(AccommodationDTO accommodationDTO) {
        Accommodation accommodation = convertToEntity(accommodationDTO);
        Accommodation savedAccommodation = accommodationRepository.save(accommodation);
        return convertToDTO(savedAccommodation);
    }

    public AccommodationDTO update(Integer id, AccommodationDTO accommodationDTO) {
        if (!accommodationRepository.existsById(id)) {
            throw new AccommodationNotFoundException("Accommodation not found");
        }
        Accommodation accommodation = convertToEntity(accommodationDTO);
        accommodation.setId(id); // nos aseguramos que se actualice el ID
        Accommodation updatedAccommodation = accommodationRepository.save(accommodation);
        return convertToDTO(updatedAccommodation);
    }

    public void delete(Integer id) {
        if (!accommodationRepository.existsById(id)) {
            throw new AccommodationNotFoundException("Accommodation not found");
        }
        accommodationRepository.deleteById(id);
    }
}
