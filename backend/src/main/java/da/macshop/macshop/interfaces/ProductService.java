package da.macshop.macshop.interfaces;

import da.macshop.macshop.entities.Product;

import java.util.List;

public interface ProductService {
    Product create(Product product);

    Product delete(int id);

    List<Product> findAll();

    Product findById(int id);

    Product update(Product product);
}
