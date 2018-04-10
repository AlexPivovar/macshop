package da.macshop.macshop.controller;

import da.macshop.macshop.entities.Product;
import da.macshop.macshop.interfaces.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/catalog"})
public class ProductController {
    private final ProductService productService;

    public ProductController(final ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public Product create(@RequestBody final Product product){
        return productService.create(product);
    }

    @GetMapping(path = {"/{id}"})
    public Product findOne(@PathVariable("id") final int id){
        return productService.findById(id);
    }

    @PutMapping
    public Product update(@RequestBody final Product product){
        return productService.update(product);
    }

    @DeleteMapping(path ={"/{id}"})
    public Product delete(@PathVariable("id") final int id) {
        return productService.delete(id);
    }

    @GetMapping
    public List<Product> findAll(){
        return productService.findAll();
    }

}
