package DevGroup.BookingReyunos.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import DevGroup.BookingReyunos.model.User;


public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);
}
