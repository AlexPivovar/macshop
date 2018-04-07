package da.macshop.macshop.service;

import da.macshop.macshop.entities.Product;
import da.macshop.macshop.interfaces.ProductRepository;
import da.macshop.macshop.interfaces.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product create(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product delete(int id) {
        Product product = findById(id);
        if (product != null) {
            productRepository.delete(product);
        }
        return product;
    }

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Product findById(int id) {
        return productRepository.findOne(id);
    }

    @Override
    public Product update(Product product) {
        return null;
    }
}
