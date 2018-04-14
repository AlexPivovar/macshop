package da.macshop.service;

import da.macshop.entity.Product;
import da.macshop.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product create(Product product) {
        return productRepository.saveAndFlush(product);
    }

    public List<Product> getAll() {
        return productRepository.findAll();
    }

    public Product getOne(int id) {
        return productRepository.getOne(id);
    }

    public Product update(int id, Product product) {
        Product result = productRepository.getOne(id);

        if (product != null) {
            result.setName(product.getName());
            result.setCost(product.getCost());
            productRepository.saveAndFlush(result);
        }

        return result;
    }

    public Product delete(int id) {
        Product product = productRepository.getOne(id);
        productRepository.deleteById(id);

        return product;
    }
}
