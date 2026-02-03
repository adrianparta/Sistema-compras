import jakarta.servlet.http.HttpServletRequest;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SpaErrorController implements ErrorController {

    @RequestMapping("/error")
    public String handleError(HttpServletRequest request) {

        String uri = (String) request.getAttribute("jakarta.servlet.error.request_uri");

        if (uri == null) {
            return "forward:/index.html";
        }

        // NO tocar API ni H2
        if (uri.startsWith("/api") ||
            uri.startsWith("/h2") ||
            uri.startsWith("/h2-console")) {

            return "error";
        }

        // Todo lo demás → Angular
        return "forward:/index.html";
    }
}
