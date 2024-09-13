package DevGroup.BookingReyunos.controller;

import DevGroup.BookingReyunos.dto.AccommodationDTO;
import DevGroup.BookingReyunos.service.AccommodationService;
import DevGroup.BookingReyunos.exceptions.AccommodationNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/accommodations")
public class AccommodationController {

    @Autowired
    private AccommodationService accommodationService;

    // Obtener todos los alojamientos
    @GetMapping
    public ResponseEntity<List<AccommodationDTO>> getAllAccommodations() {
        List<AccommodationDTO> accommodations = accommodationService.findAll();
        return new ResponseEntity<>(accommodations, HttpStatus.OK);
    }

    // Obtener un alojamiento por su ID
    @GetMapping("/{id}")
    public ResponseEntity<AccommodationDTO> getAccommodationById(@PathVariable Integer id) {
        try {
            AccommodationDTO accommodation = accommodationService.findById(id);
            return new ResponseEntity<>(accommodation, HttpStatus.OK);
        } catch (AccommodationNotFoundException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    // Crear un nuevo alojamiento
    @PostMapping
    public ResponseEntity<AccommodationDTO> createAccommodation(@RequestBody AccommodationDTO accommodationDTO) {
        AccommodationDTO createdAccommodation = accommodationService.save(accommodationDTO);
        return new ResponseEntity<>(createdAccommodation, HttpStatus.CREATED);
    }

    // Actualizar un alojamiento existente
    @PutMapping("/{id}")
    public ResponseEntity<AccommodationDTO> updateAccommodation(@PathVariable Integer id, @RequestBody AccommodationDTO accommodationDTO) {
        try {
            AccommodationDTO updatedAccommodation = accommodationService.update(id, accommodationDTO);
            return new ResponseEntity<>(updatedAccommodation, HttpStatus.OK);
        } catch (AccommodationNotFoundException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    // Eliminar un alojamiento
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAccommodation(@PathVariable Integer id) {
        try {
            accommodationService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (AccommodationNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
