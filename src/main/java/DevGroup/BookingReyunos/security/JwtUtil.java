package DevGroup.BookingReyunos.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import DevGroup.BookingReyunos.model.User;

import java.util.Date;

@Component
public class JwtUtil {

    @Value("${jwt.secret}")
    private String secretKeyString;

    // Extraer el nombre de usuario del token JWT
    public String extractUsername(String token) {
        return parseClaims(token).getSubject();
    }

    // Validar el token JWT
    public boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    // Verificar si el token ha expirado
    private boolean isTokenExpired(String token) {
        return parseClaims(token).getExpiration().before(new Date());
    }

    // Parsear el token JWT y obtener las claims
    private Claims parseClaims(String token) {
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(Keys.hmacShaKeyFor(secretKeyString.getBytes()))  // Utiliza la clave secreta para verificar la firma
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
        } catch (Exception e) {
            // Manejar excepciones, tal vez lanzar una excepción personalizada
            throw new RuntimeException("Token inválido o expirado");
        }
    }

    // Generar un nuevo JWT token
// Modificar el método en JwtUtil
public String generateToken(User user) {
    return Jwts.builder()
            .setSubject(user.getUsername())
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // Token válido por 10 horas
            .signWith(Keys.hmacShaKeyFor(secretKeyString.getBytes()), SignatureAlgorithm.HS256)
            .compact();
}

}
