package da.macshop.controller;

import da.macshop.entity.Product;
import da.macshop.service.ProductService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/create")
    public Product create(@RequestBody Product product) {
        productService.create(product);

        return product;
    }

    @GetMapping("/all-products")
    public List<Product> getAll() {
        return productService.getAll();
    }

    @GetMapping("/product")
    public Product getOne(@RequestParam("id") int id) {
        return productService.getOne(id);
    }

    @PutMapping("/update")
    public Product update(@RequestParam("id") int id, @RequestBody Product product) {
        return productService.update(id, product);
    }

    @DeleteMapping("/delete")
    public Product delete(@RequestParam("id") int id) {
        return productService.delete(id);
    }
}
