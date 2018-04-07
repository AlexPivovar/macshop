package da.macshop.macshop.interfaces;

import da.macshop.macshop.entities.Product;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface ProductRepository extends Repository<Product, Integer> {
    void delete(Product product);

    List<Product> findAll();

    Product findOne(int id);

    Product save(Product product);
}
