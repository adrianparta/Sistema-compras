package com.bootcamp.proyectointegrador.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SpaForwardController {

    @RequestMapping(value = {
            "/{path:^(?!api$|h2$|h2-console$)[^\\.]*}",
            "/{path:^(?!api$|h2$|h2-console$)[^\\.]*}/**"
    })
    public String forward() {
        return "forward:/index.html";
    }
}
