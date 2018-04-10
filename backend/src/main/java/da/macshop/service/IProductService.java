package da.macshop.service;

import da.macshop.entity.Product;

import java.util.List;

public interface IProductService {
    List<Product> getAllProducts();

    Product getProductById(int id);

    boolean createProduct(Product product);

    void updateProduct(Product product);

    void deleteProduct(int id);
}
