package da.macshop.controller;

import da.macshop.entity.Product;
import da.macshop.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@Controller
//@RequestMapping("product")
@CrossOrigin(origins = {"http://localhost:4200"})
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("product")
    public ResponseEntity<Product> getProductById(@RequestParam("id") String id) {
        Product product = productService.getProductById(Integer.parseInt(id));

        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }

    @GetMapping("all-products")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> productList = productService.getAllProducts();

        return new ResponseEntity<List<Product>>(productList, HttpStatus.OK);
    }

    @PostMapping("product")
    public ResponseEntity<Void> createProduct(@RequestBody Product product, UriComponentsBuilder builder) {
        boolean flag = productService.createProduct(product);

        if (!flag) {
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/product?id={id}").buildAndExpand(product.getId()).toUri());

        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

    @PutMapping("product")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product) {
        productService.updateProduct(product);

        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }

    @DeleteMapping("product")
    public ResponseEntity<Void> deleteProduct(@RequestParam("id") String id) {
        productService.deleteProduct(Integer.parseInt(id));

        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
