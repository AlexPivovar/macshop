package da.macshop.service;

import da.macshop.dao.IProductDAO;
import da.macshop.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductDAO productDAO;

    @Override
    public List<Product> getAllProducts() {
        return productDAO.getAllProducts();
    }

    @Override
    public Product getProductById(int id) {
        Product product = productDAO.getProductById(id);
        return product;
    }

    @Override
    public synchronized boolean createProduct(Product product) {
        if (productDAO.productExists(product.getName(), product.getCost())) {
            return false;
        } else {
            productDAO.createProduct(product);
            return true;
        }
    }

    @Override
    public void updateProduct(Product product) {
        productDAO.updateProduct(product);
    }

    @Override
    public void deleteProduct(int id) {
        productDAO.deleteProduct(id);
    }
}
