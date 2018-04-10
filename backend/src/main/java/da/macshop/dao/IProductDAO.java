package da.macshop.dao;

import da.macshop.entity.Product;

import java.util.List;

public interface IProductDAO {
    List<Product> getAllProducts();

    Product getProductById(int id);

    void createProduct(Product product);

    void updateProduct(Product product);

    void deleteProduct(int id);

    boolean productExists(String name, int cost);
}
