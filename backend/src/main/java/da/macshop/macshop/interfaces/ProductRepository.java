package da.macshop.macshop.interfaces;

import da.macshop.macshop.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    void delete(final Product product);
}
