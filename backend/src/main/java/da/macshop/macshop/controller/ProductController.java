package da.macshop.macshop.controller;

import da.macshop.macshop.entities.Product;
import da.macshop.macshop.interfaces.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/catalog"})
public class ProductController {
    @Autowired
    ProductService productService;

    @PostMapping
    public Product create(@RequestBody Product product){
        return productService.create(product);
    }

    @GetMapping(path = {"/{id}"})
    public Product findOne(@PathVariable("id") int id){
        return productService.findById(id);
    }

    @PutMapping
    public Product update(@RequestBody Product product){
        return productService.update(product);
    }

    @DeleteMapping(path ={"/{id}"})
    public Product delete(@PathVariable("id") int id) {
        return productService.delete(id);
    }

    @GetMapping
    public List<Product> findAll(){
        return productService.findAll();
    }

}
