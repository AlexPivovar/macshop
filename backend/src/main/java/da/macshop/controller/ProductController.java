package da.macshop.controller;

import da.macshop.entity.Product;
import da.macshop.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
    private ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @PostMapping("/create")
    public Product create(@RequestBody Product product) {
        productRepository.saveAndFlush(product);

        return product;
    }

    @GetMapping("/all-products")
    public List<Product> getAll() {
        return productRepository.findAll();
    }

    @GetMapping("/product")
    public Product getOne(@RequestParam("id") int id) {
        return productRepository.getOne(id);
    }

    @PutMapping("/update")
    public Product update(@RequestParam("id") int id, @RequestBody Product product) {
        Product result = productRepository.getOne(id);

        if (product != null) {
            result.setName(product.getName());
            result.setCost(product.getCost());
            productRepository.saveAndFlush(result);
        }

        return result;
    }

    /*    @GetMapping("/delete")
        @DeleteMapping("/delete")*/
    @RequestMapping(value = "/delete", method = {RequestMethod.GET, RequestMethod.GET, RequestMethod.OPTIONS})
    public Product delete(@RequestParam("id") int id) {
        Product product = productRepository.getOne(id);
        productRepository.deleteById(id);

        return product;
    }
}
