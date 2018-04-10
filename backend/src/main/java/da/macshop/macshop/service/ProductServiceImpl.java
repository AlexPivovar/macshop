package da.macshop.macshop.service;

import da.macshop.macshop.entities.Product;
import da.macshop.macshop.interfaces.ProductRepository;
import da.macshop.macshop.interfaces.ProductService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    public ProductServiceImpl(final ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product create(final Product product) {
        return productRepository.saveAndFlush(product);
    }

    @Override
    public Product delete(final int id) {
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
    public Product findById(final int id) {
        return productRepository.getOne(id);
    }

    @Override
    public Product update(final Product product) {
        return null;
    }
}
