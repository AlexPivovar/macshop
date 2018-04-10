package da.macshop.dao;

import da.macshop.entity.Product;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Transactional
@Repository
public class ProductDAO implements IProductDAO {
    @PersistenceContext
    private EntityManager entityManager;

    @SuppressWarnings("unchecked")
    @Override
    public List<Product> getAllProducts() {
        String hql = "FROM Product as prod ORDER BY prod.id DESC";
        return (List<Product>) entityManager.createQuery(hql).getResultList();
    }

    @Override
    public Product getProductById(int id) {
        return entityManager.find(Product.class, id);
    }

    @Override
    public void createProduct(Product product) {
        entityManager.persist(product);
    }

    @Override
    public void updateProduct(Product product) {
        Product prod = getProductById(product.getId());
        prod.setName(product.getName());
        prod.setCost(product.getCost());

        entityManager.flush();
    }

    @Override
    public void deleteProduct(int id) {
        entityManager.remove(getProductById(id));
    }

    @Override
    public boolean productExists(String name, int cost) {
        String hql = "FROM Article as prod WHERE prod.name = ? and prod.cost = ?";
        int count = entityManager.createQuery(hql).setParameter(1, name)
                .setParameter(2, cost).getResultList().size();

        return count > 0;
    }
}
