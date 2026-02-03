import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class SpaForwardFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        String uri = request.getRequestURI();
        String accept = request.getHeader("Accept");

        boolean isGet = "GET".equalsIgnoreCase(request.getMethod());
        boolean wantsHtml = (accept != null && accept.contains("text/html"));
        boolean isFile = uri.contains(".");
        boolean isApi = uri.equals("/api") || uri.startsWith("/api/");
        boolean isH2 = uri.equals("/h2") || uri.startsWith("/h2/")
                   || uri.equals("/h2-console") || uri.startsWith("/h2-console/");

        // Si es una navegación de browser a una ruta SPA (ej: /home), forward a index.html
        if (isGet && wantsHtml && !isFile && !isApi && !isH2) {
            request.getRequestDispatcher("/index.html").forward(request, response);
            return;
        }

        filterChain.doFilter(request, response);
    }
}
