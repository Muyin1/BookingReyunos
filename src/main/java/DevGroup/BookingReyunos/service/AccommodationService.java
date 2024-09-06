package DevGroup.BookingReyunos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import DevGroup.BookingReyunos.dto.AccommodationDTO;
import DevGroup.BookingReyunos.model.Accommodation;
import DevGroup.BookingReyunos.repository.AccommodationRepository;

@Service
public class AccommodationService {

    @Autowired
    private AccommodationRepository accommodationRepository;

    // Método para convertir Accommodation a AccommodationDTO
    private AccommodationDTO convertToDTO(Accommodation accommodation) {
        AccommodationDTO dto = new AccommodationDTO();
        dto.setId(accommodation.getId());
        dto.setName(accommodation.getName());
        dto.setDescription(accommodation.getDescription());
        // Otros campos a convertir
        return dto;
    }

    // Método para convertir AccommodationDTO a Accommodation
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
        Optional<Accommodation> accommodation = accommodationRepository.findById(id.intValue());
        return accommodation.map(this::convertToDTO)
                            .orElseThrow(() -> new RuntimeException("Accommodation not found"));
    }

    public AccommodationDTO save(AccommodationDTO accommodationDTO) {
        Accommodation accommodation = convertToEntity(accommodationDTO);
        Accommodation savedAccommodation = accommodationRepository.save(accommodation);
        return convertToDTO(savedAccommodation);
    }

    public AccommodationDTO update(Integer id, AccommodationDTO accommodationDTO) {
        Accommodation accommodation = convertToEntity(accommodationDTO);
        accommodation.setId(id.intValue()); // nos aseguramps que se actualice el ID
        Accommodation updatedAccommodation = accommodationRepository.save(accommodation);
        return convertToDTO(updatedAccommodation);
    }

    public void delete(Integer id) {
        accommodationRepository.deleteById(id);
    }
}
