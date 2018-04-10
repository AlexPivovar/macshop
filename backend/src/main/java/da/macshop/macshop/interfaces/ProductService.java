package da.macshop.macshop.interfaces;

import da.macshop.macshop.entities.Product;

import java.util.List;

public interface ProductService {
    Product create(final Product product);

    Product delete(final int id);

    List<Product> findAll();

    Product findById(final int id);

    Product update(final Product product);
}
