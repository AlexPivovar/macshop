package da.macshop.macshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "da.macshop.macshop.entities")
public class MacshopApplication {

    public static void main(String[] args) {
        SpringApplication.run(MacshopApplication.class, args);
    }
}
